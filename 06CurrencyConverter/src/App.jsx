import { useState } from 'react';
import { InputBox } from './components/InputBox.jsx';
import {useCcurrencyInfo} from './hooks/useCcurrencyInfo.js';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState(['inr'])
  const [to, setTo] = useState('usd')
  const [convertedAmount, setconvertedAmount] = useState(0)

  // hook
  const currencyInfo = useCcurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  const convert = () => {
      setconvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    // setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://picsum.photos/200')`,
        
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount = {amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)} 
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount = {convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App
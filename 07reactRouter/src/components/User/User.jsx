import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center p-5 text-3xl bg-gray-600 text-white'>User : {userid}</div>
  )
}

export default User
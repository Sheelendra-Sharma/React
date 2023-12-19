// import React from 'react'

import { useEffect, useState } from "react"

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Sheelendra-Sharma')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-center justify-center items-center m-4 p-4 bg-gray-600 text-white text-3xl'>
        Github Follower : {data.followers}
        <img src={data.avatar_url} alt="Github Profile" width={300}/>
    </div>
  )
}

export default Github
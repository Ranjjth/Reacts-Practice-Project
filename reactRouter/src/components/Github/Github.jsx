import React, { useEffect, useState } from 'react'

function Github() {

const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(res=> res.json())
        .then((res)=>{
            console.log(res.followers)
        setData(res)
        console.log(data);
        
    })
    },[])
  return (
      <div className='flex gap-10 p-4 text-3xl text-white bg-gray-700'>
      <img src={data.avatar_url} alt="github profile" /> 
      Github Followers: {data.followers}</div>
  )
}

export default Github
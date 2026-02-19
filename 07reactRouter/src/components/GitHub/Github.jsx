// import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

const Github = () => {
    
     const data = useLoaderData()
//    const [data,setData]= useState([])

//     useEffect(()=>{
//         fetch('https://api.github.com/users/ishantawasthi')
//         .then(res=>res.json())
//         .then(data=>{console.log(data)
//             setData(data)
//         })
//     },[])

  return (
    <div  className=' text-center m-4 bg-amber-300 text-white'>
        GitHub Followers :   {data.followers}
        <img  src={data.avatar_url} alt="GitHub Avatar" />
    </div>
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ishantawasthi')
    return response.json()
}


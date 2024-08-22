import { data, } from 'autoprefixer'
import { useState, useEffect } from 'react'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setdata] = useState([])

    // useEffect(() => {
    //   fetch("https://api.github.com/users/Ali2220")
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((data)=> {
    //     console.log(data)
    //     setdata(data)
    //   })
    // }, [])
    

  return (
    <div className=' text-center m-4 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-black p-4 text-3xl `'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}  />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
   const response =  await fetch("https://api.github.com/users/Ali2220")

   return response.json()
}
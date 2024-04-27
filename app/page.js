'use client'
import React, { useState } from 'react'

const page = () => {
  const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://keralakaumudi.com/web-news/en/2023/05/NMAN0413506/image/tiger.1.559435.jpg",
  // "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ]
  
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  } 

  let renderImage = images.map((image, i) => {
    return(
      current === i && (<div key = {image} className='h-96 w-96'><img src = {image} alt = 'images' className='bg-cover bg-center '/></div>)
    )
  })

  return (
    <div className='h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
      <div className='flex justify-center'><h1 className='font-bold text-4xl mt-10 text-white tex'>Image Slider</h1></div>
    
    <div className='flex justify-between w-screen h-2/5 mt-40'>
      <div className='bg-black opacity-75 text-white font-bold text-6xl rounded-full w-20 h-12 flex justify-center items-center ml-20 mt-36 cursor-pointer' onClick={prevSlide}>⬅</div>
      {renderImage}
      <div className='bg-black opacity-75 text-white font-bold text-6xl rounded-full w-20 h-12 flex justify-center items-center mr-20 mt-36 cursor-pointer' onClick={nextSlide}>⮕</div>
    </div>
    </div>
  )
}

export default page
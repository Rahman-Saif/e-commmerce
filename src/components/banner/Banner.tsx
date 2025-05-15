"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'



  const bannerImages = [
    {
      src: '/1.jpg',
      title: 'Summer Collection',
      description: 'Up to 50% off on selected items'
    },
    {
      src: '/2.jpg',
      title: 'New Arrivals',
      description: 'Check out our latest products'
    },
    {
      src: '/3.jpg',
      title: 'Special Deals',
      description: 'Limited time offers on premium items'
    }
  ]

   


const Banner = () => {
      const [currentSlide, setCurrentSlide] = useState(0)

      useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[500px] overflow-hidden">
        {bannerImages.map((banner, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 transform ${
              index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={banner.src}
                alt={banner.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{banner.description}</p>
                  <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>
  )
}

export default Banner

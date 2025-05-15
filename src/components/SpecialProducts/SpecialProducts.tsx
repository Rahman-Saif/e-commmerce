"use client"
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';

const SpecialProducts = () => {

  const {products}=useContext(ShopContext);
  console.log(products);

     const [currentIndex, setCurrentIndex] = useState(0)

  const products1=products.filter((product)=>product.specialProduct===true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products1.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products1.length - 3 : prevIndex - 1
    )
  }

  return (
   <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Special Products</h2>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {products1.map((product) => (
                <div 
                  key={product.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="relative h-96 rounded-lg overflow-hidden group">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-opacity group-hover:opacity-90" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                      <p className="mb-3 opacity-90">{product.description}</p>
                      <p className="text-xl font-bold mb-4">{product.price}</p>
                      <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all -ml-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all -mr-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpecialProducts

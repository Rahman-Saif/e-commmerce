"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductByCategory = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

  const categories = [
    { id: 1, name: "Electronics", image: "/pexels-nerdcinema-19373148.jpg" },
    { id: 2, name: "Fashion", image: "/pexels-martinpechy-2078268.jpg" },
    { id: 3, name: "Home & Living", image: "/pexels-salahkuro28-1232459.jpg" },
    { id: 4, name: "Sports", image: "/pexels-nerdcinema-19330216.jpg" },
    { id: 5, name: "Beauty", image: "/pexels-gursher-gill-63702010-18765235.jpg" },
    { id: 6, name: "Books", image: "/pexels-jatin-anand-33853-125779.jpg" },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === categories.length - 4 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 4 : prev - 1))
  }


  return (
   <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Shop by Category</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-4"
                >
                  <div className="relative group cursor-pointer">
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    </div>
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all -ml-5 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all -mr-5 z-10"
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

export default ProductByCategory

import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';

const DiscountBanner = () => {

  return (
<section className="">
  <div className="relative h-[400px] overflow-hidden rounded-2xl">
    <Image
      src="/pexels-martinpechy-2078268.jpg"
      alt="Special Sale"
      fill
      className="object-cover w-full h-full"
      sizes="100vw"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full max-w-lg">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-4">
              Summer Sale 30% Off
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Get amazing discounts on all our premium products. Limited time offer!
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold">
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default DiscountBanner

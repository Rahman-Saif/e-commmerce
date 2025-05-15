import Image from 'next/image'
import React from 'react'

const Logo = () => {

    const brands = [
    { name: 'Nike', src: '/logo1.jpg' },
    { name: 'Adidas', src: '/logo2.png' },
    { name: 'Puma', src: '/logo3.png' },
    { name: 'Reebok', src: '/logo4.png' },
    { name: 'Under Armour', src: '/logo5.jpg' },
    { name: 'New Balance', src: '/logo6.jpg' },
  ]


  return (
   <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Our Featured Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="flex justify-center items-center p-4 hover:opacity-75 transition-opacity"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain w-24 h-24"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logo

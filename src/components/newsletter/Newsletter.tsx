import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and receive exclusive offers, latest news, and updates.
          </p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails from us.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

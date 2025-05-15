import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                E-Shop
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                About
              </Link>
            </div>

            {/* User Actions */}
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <Link href="/cart" className="text-gray-700 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                Login
              </Link>
              <Link href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
              <button className="text-gray-700 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Nav

import React from 'react'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import Banner from '../banner/Banner'
import Logo from '../logo/Logo'
import SpecialProducts from '../SpecialProducts/SpecialProducts'
import FeaturedProducts from '../Featuredproducts/FeaturedProducts'
import DiscountBanner from '../discountBanner/DiscountBanner'
import ProductByCategory from '../productByCategory/ProductByCategory'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Nav/>
      <Search/>
      <Banner/>
      <Logo/>
      <SpecialProducts/>
      <FeaturedProducts/>
      <DiscountBanner/>
      <ProductByCategory/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default HomePage

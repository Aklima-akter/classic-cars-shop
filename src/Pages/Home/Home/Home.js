import React from 'react'
import ContactUs from '../../ContactUs/ContactUs'
import Footer from '../../Shared/Footer/Footer'
import Navigation from '../../Shared/Navigation/Navigation'
import HomeBanner from '../HomeBanner/HomeBanner'
import Products from '../Products/Products'
import Reviews from '../Reviews/Reviews'

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <HomeBanner></HomeBanner>
      <Products></Products>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  )
}

export default Home

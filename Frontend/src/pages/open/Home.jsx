import React from 'react'
import LandingPage from '../../sections/LandingPage'
import Marquee from '../../components/Marquee'
import Categories from '../../sections/Categories'
import WhyUs from '../../sections/WhyUs'

function Home() {
  return (
    <div>
      <LandingPage/>
      <Marquee/>
      <Categories/>
      <WhyUs/>
    </div>
  )
}

export default Home

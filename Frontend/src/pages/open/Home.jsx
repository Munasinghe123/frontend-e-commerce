import React from 'react'
import LandingPage from '../../sections/LandingPage'
import Marquee from '../../components/Marquee'
import Categories from '../../sections/Categories'
import WhyUs from '../../sections/WhyUs'
import Testimonial from '../../sections/Testimonial '
import FAQ from '../../sections/FAQ'

function Home() {
  return (
    <div>
      <LandingPage />
      <Marquee />
      <Categories />
      <WhyUs />
      <Testimonial />
      <FAQ />
    </div>
  )
}

export default Home

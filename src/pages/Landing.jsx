import React from 'react'
import Layout from '../components/Landing/Layout'
import Hero from '../components/Landing/Hero'
import About from '../components/Landing/About'
import Footer from '../components/Landing/Footer'
import Donate from '../components/Landing/Donate'
import JoinVolunteers from '../components/Landing/JoinVolunteers'
import Event from '../components/Landing/Event'
import Testimonial from '../components/Landing/Testimonial'
import Gallery from '../components/Landing/Gallery'
import News from '../components/Landing/News'

const Landing = () => {
  return (
    <div>
        <Layout />
        <Hero />
        <About/>
        <Donate />
        <JoinVolunteers />
        <Event />
        <Testimonial />
        <Gallery />
        <News />
        <Footer />
    </div>
  )
}

export default Landing
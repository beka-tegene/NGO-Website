import React from 'react'
import Layout from '../components/Landing/Layout'
import Hero from '../components/Landing/Hero'
import About from '../components/Landing/About'
import Contact from '../components/Landing/Contact'
import Footer from '../components/Landing/Footer'

const Landing = () => {
  return (
    <div>
        <Layout />
        <Hero />
        <About/>
        <Contact/>
        <Footer />
    </div>
  )
}

export default Landing
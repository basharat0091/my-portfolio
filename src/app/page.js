import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Journey from '@/Components/Journey'
import Navbar from '@/Components/Navbar'
import Selectedwork from '@/Components/Selectedwork'
import TechStack from '@/Components/Techstack'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Selectedwork/>
      <TechStack/>
      <Journey/>
      <Footer/>
    </div>
  )
}

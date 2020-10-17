import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar/Index'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar/Index'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Navbar setIsOpen={setIsOpen}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
      <Footer/>
    </>
  )
}

export default Home

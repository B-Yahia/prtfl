
import React from 'react'
import AboutMe from '../../Components/AboutMe/AboutMe'
import Footer from '../../Components/Footer/Footer'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import "./AboutPage.css"

function AboutPage() {
  return (
    <div className='about-page'>
        <NavigationBar></NavigationBar>
        <AboutMe></AboutMe>
        <Footer></Footer>
    </div>
  )
}

export default AboutPage
import React from 'react'
import Navbar from './Copnentions/Navbar'
import Home from './Copnentions/Home'
import SocialLinks from './Copnentions/SocialLinks'
import About from './Copnentions/About'
import Portfolio from './Copnentions/Portfolio'
import Experince from './Copnentions/Experince'
import Contact from './Copnentions/Contact'
import NavbarLinks from './Copnentions/NavbarLinks'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experince/>
     <Contact/>

    <SocialLinks/>
    <NavbarLinks/>
    </div>
  )
}

export default App


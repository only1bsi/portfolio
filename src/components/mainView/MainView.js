import React from 'react'
import Hero from '../main/Hero'
import Services from '../main/Services'
import Blog from '../main/Blog'
import "./MainView.css"

function MainView() {
  return (
    <div className='main-view'>
        <Hero />
        <Services />
        <Blog />
    </div>
  )
}

export default MainView
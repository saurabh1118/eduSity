import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='Hero container'>
        <div className='Hero-text'>
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting-edge curriculm is designed to empower stdents with the knowledgw , skills , and experiences needed to excel in the dynamic field of education.</p>
            <button className='btn'>Explore More<img src={dark_arrow} alt='' /></button>
        
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import About from '../components/About'
import '../styles/about.css';
import {aboutItems} from '../data/aboutItems'
const AboutPage = () => {
  return (
    <div className = "about-page">
      <h1 className = "about-header">What You Can Do</h1>
      <div className="about-containers">
        {aboutItems.map((item, index) => (
          <About key = {index} item = {item}/>
        ))}
      </div>
    </div>
  )
}


export default AboutPage

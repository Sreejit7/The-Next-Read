import React from 'react'
import About from '../components/About'
import '../styles/about.css';
import {aboutItems} from '../data/aboutItems'
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <div className = "about-page">
      <h1 className = "about-header">What We Offer</h1>
      <div className="about-containers">
        {aboutItems.map((item, index) => (
          <About key = {index} item = {item}/>
        ))}
      </div>
      <Link className = "link btn library-btn" to = "/home">Explore library</Link>
    </div>
  )
}


export default AboutPage

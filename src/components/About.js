import React from 'react';
import '../styles/about.css';

const About = ({item}) => {
  const {title, content} = item;
  return (
    <div className = "about-card">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default About

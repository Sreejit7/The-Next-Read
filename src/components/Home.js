import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'
import book from '../images/book.svg';
const Home = () => {
  return (
    <div className = "home-page">
      <div className="title-container">
        <Link className="link home-title" to = "/">
          <h1>The Next Read</h1>
        </Link>
        <span>Dreamland for Bibliophiles</span>
      </div>
      <div className="home-left">
        <img
          src = {book}
          alt = "book"
          className = "book-img"
        />
        <section className = "home-text">
          <h1>Change the way you deal with books. 📚</h1>
          <h3></h3>
        </section>
        <Link className = "link btn get-started-btn" to = "/login">Get Started</Link>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import Login from '../components/Login'
import {Link} from 'react-router-dom'
import '../styles/login.css';
import '../styles/home.css';
const LoginPage = () => {
  return (
    <div className = "login-page">
      <div className="title-container">
        <Link className="link home-title" to = "/">
          <h1>The Next Read</h1>
        </Link>
        <span>Dreamland for Bibliophiles</span>
      </div>
      <Login/>
    </div>
  )
}

export default LoginPage

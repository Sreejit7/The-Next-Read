import React,{useEffect} from 'react'
import '../styles/navbar.css'
import { FaBars } from 'react-icons/fa';
import {navItems} from '../data/navbarItems';
import { useGlobalContext } from '../context';
import {auth} from '../firebase'
import {Link, useHistory} from 'react-router-dom';
const Navbar = () => {
  const {sidebar, sidebarToggle, user, setUser} = useGlobalContext();
  const history = useHistory();
  const signOut = (e) => {
    e.preventDefault();
    auth.signOut();
  }
  const setSignIn = () => {
    history.push('/login');
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( user => {
      setUser(user);
    });
    return unsubscribe;
  },[user]);
  return (
    <nav className = {`navbar ${user && "registered"}`}>
      {user !== null && <button className = "btn sign-in-out-btn" onClick = {signOut}>Sign Out</button>}
      {user === null && <button className = "btn sign-in-out-btn" onClick = {setSignIn}>Sign In</button>}
      <Link className = "link navbar-logo" to = "/">
      <h1 className = "navbar-title">The Next Read</h1>
      </Link>
      <ul className = "nav-links">
        {navItems.map((item, index) => {
          const {title, link} = item;
          return(
            <li key = {index} className = "nav-item">
              <a className = "link" href = {link}>{title}</a>
            </li>
          )
        })}
      </ul>      

      <button className = "btn navbar-btn">
        <FaBars onClick = {sidebarToggle}/>
      </button>
    </nav>
  )
}

export default Navbar

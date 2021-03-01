import React from 'react'
import {navItems} from '../data/navbarItems'
import '../styles/sidebar.css'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Sidebar = () => {

  const {sidebar, sidebarToggle } = useGlobalContext();
  return (
    <aside className = {`sidebar ${sidebar && "show"}`}>
      <ul className = "sidebar-menu">
        <button className = "close-btn" onClick = {sidebarToggle}>
          <FaTimes/>
        </button>
        {navItems.map((item, index) => {
          const {title, link} = item;
          return(
            <li key = {index} className = "sidebar-item"><a className = "link" href = {link}>{title}</a></li>
          );
        })}
      </ul>
    </aside>
  )
}

export default Sidebar;

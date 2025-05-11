import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiUsers, FiSettings, FiUser, FiMenu, FiX } from 'react-icons/fi'
import './Sidebar.css'
import SidebarClosed from './sidebarClosed'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation()
  
  const menuItems = [
    { path: '/', icon: <FiHome />, title: 'Dashboard' },
    { path: '/users', icon: <FiUsers />, title: 'User Management' },
    { path: '/settings', icon: <FiSettings />, title: 'Settings' },
    { path: '/profile', icon: <FiUser />, title: 'Profile' }
  ]

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        {isOpen ? (
          <>
            <h2>Admin Dashboard</h2>
            <button className="toggle-btn" onClick={toggleSidebar}>
              <FiX />
            </button>
          </>
        ) : (
          <button className="toggle-btn" onClick={toggleSidebar}>
            {/* <FiMenu /> */}
            <SidebarClosed /> 
          </button>
        )}
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                <span className="icon">{item.icon}</span>
                {isOpen && <span className="title">{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

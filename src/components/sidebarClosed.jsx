import React from 'react';
import './sidebarClosed.css';

const SidebarClosed = () => {
  return (
    <div className="sidebar">
      <div className="menu-item">
        <span className="icon">📁</span>
        Design
      </div>
      <div className="menu-item">
        <span className="icon">🧩</span>
        Elements
      </div>
      <div className="menu-item">
        <span className="icon">✍️</span>
        Text
      </div>
      <div className="menu-item">
        <span className="icon">🎨</span>
        Brand
      </div>
      <div className="menu-item">
        <span className="icon">☁️</span>
        Uploads
      </div>
      <div className="menu-item">
        <span className="icon">🔧</span>
        Tools
      </div>
      <div className="menu-item">
        <span className="icon">📋</span>
        Projects
      </div>
      <div className="menu-item">
        <span className="icon">📱</span>
        Apps
      </div>
      <div className="add-button">
        <span className="plus-icon">+</span>
      </div>
    </div>
  );
};

export default SidebarClosed;
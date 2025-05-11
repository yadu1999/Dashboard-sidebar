import React from "react";


import "./Topbar.css";
import { FaBars, FaPlus, FaUndo, FaRedo, FaCloud, FaChartBar, FaRegCommentDots, FaShare, FaPen } from 'react-icons/fa';

const Topbar = ({ toggleSidebar }) => {
  return (



 <div className="topbar">
      <div className="topbar-left">
        <FaBars className="icon large-icon" onClick={toggleSidebar}/>
        <span className="dropdown">File</span>
        <span className="dropdown">Resize</span>
        <span className="dropdown"><FaPen className="icon-small" /> Editing</span>
        <FaUndo className="icon" />
        <FaRedo className="icon" />
        <FaCloud className="icon" />
      </div>

      <div className="topbar-title">
        Blue and White Modern Labour Day Greeting Instagram Post
      </div>

      
      <div className="topbar-right">
        <div className="profile-badge">
          AR
          <div className="plus-icon"></div>
        </div>
        <FaPlus size={10} />
        <FaChartBar className="icon" />
        <FaRegCommentDots className="icon" />
        <button className="share-button"><FaShare style={{ marginRight: '5px' }} />Share</button>
      </div>
    </div>
  );
};

export default Topbar;

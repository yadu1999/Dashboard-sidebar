
import React from 'react';
import './TopToolbar.css';
import workerHelmet from "../../public/assets/labour.png"; 
import { TbBaselineDensityMedium } from "react-icons/tb";
import { SiArchicad } from "react-icons/si";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FaRegCommentDots } from 'react-icons/fa';
import { RiContactsLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";


const TopToolbar = () => {
  return (
    <div className="container">
      <div className="toolbar">
        <div className="tools-left">
           <div className="profile-badge">
          AR
          <div className="plus-icon"></div>
        </div>
          <div className=""><TbBaselineDensityMedium /></div>
          <div className=""><SiArchicad /></div>
          <div className=""><MdOutlineQrCodeScanner /></div>
          <hr className='hrClass' />
          <div className="icon-animate"> <FaRegCommentDots />Animate</div>
          <hr className='hrClass' />
          <div className="icon-position">Position</div>
          <RiContactsLine />
        </div>
       
      </div>

      <div className='Extra-img'>
          <span role="img" aria-label="lock">🔒</span>
          <span role="img" aria-label="copy">📄</span>
          <span role="img" aria-label="share">🔗</span>
        </div>

      <div className="poster">
           <img className='img-full' src={workerHelmet} alt={'alt'} />
          
      </div>


        <div className="add-page-wrapper">
      <span className="add-page-text">+ Add page</span>
      <hr className='hrClassData'/>
      <span className="new-badge">New</span>
      <TiArrowSortedDown  className="dropdown-arrow" size={30}/>
    </div>

   
    </div>
  );
};

export default TopToolbar;










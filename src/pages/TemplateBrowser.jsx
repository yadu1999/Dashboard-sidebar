import React from 'react';
import './TemplateBrowser.css';
import { FaChevronRight } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";


const templates = {
  recentlyUsed: [
    { title: 'Blue and White Modern Labour Day Greeting', image: '/assets/labour.png' },
    { title: 'Feather Pen Design', image: '/assets/labour1.png' },
  ],
  premium: [
    { title: 'Bright Yellow Labour Day', image: '/assets/labour2.jpg' },
    { title: 'Dark Labour Poster', image: '/assets/black.jpg' },
  ],
};

const TemplateBrowser = () => {
  return (
    <div className="browser-container">
      {/* <input className="search-input" placeholder="Use 4+ words to describe..."  /><GiSettingsKnobs /> */}

<div className="search-wrapper">
  <input
    className="search-input"
    placeholder="Use 4+ words to describe..."
  />
  <GiSettingsKnobs className="search-icon-end" />
</div>

      <div className="tabs">
        <span className="tab active">Templates</span>
        <span className="tab">Styles</span>
      </div>

      <div className="chips">
        <span className="chip">Mother's day</span>
        <span className="chip">Food</span>
        <span className="chip">Hiring</span>
        <span className="chip">Collage</span>
        <span className="chip"><FaChevronRight /></span> 
      </div>

      <Section title="Recently used" data={templates.recentlyUsed} />
      <Section title="Premium Templates for You" data={templates.premium} />
    </div>
  );
};

const Section = ({ title, data }) => (
  <div className="section">
    <div className="section-header">
      <span>{title}</span>
      <span className="see-all">See all</span>
    </div>
    <div className="card-grid">
      {data.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.title} />
          {/* <div className="card-title">{item.title}</div> */}
        </div>
      ))}
    </div>
  </div>
);

export default TemplateBrowser;

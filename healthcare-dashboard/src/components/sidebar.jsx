import React from 'react';
import '../styles/sidebar.css';
import { topNavigationLinks, bottomNavigationLinks } from '../data/navigation';

const Sidebar = () => (
  <aside className="sidebar">
    <h2>General</h2>
    <nav className="nav-top">
      {topNavigationLinks.map((link, index) => (
        <div key={index} className="nav-link">
          <i className={`icon-${link.icon}`} />
          <span>{link.label}</span>
        </div>
      ))}
    </nav>

    <div className="nav-bottom">
      {bottomNavigationLinks.map((link, index) => (
        <div key={index} className="nav-link">
          <i className={`icon-${link.icon}`} />
          <span>{link.label}</span>
        </div>
      ))}
    </div>
  </aside>
);

export default Sidebar;



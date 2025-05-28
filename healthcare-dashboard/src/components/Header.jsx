import React from 'react';
import '../styles/Header.css';
import { Plus } from 'lucide-react';
import avatar from '../assets/images/avatar.jpg'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Healthcare.</h2>
      </div>

      <div className="header-center">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      <div className="header-right">
         <div className="user-profile">
          <img src={avatar} alt="User Avatar" />
          <span>Dr. John</span>
        </div>
        <button className="add-button">
          <Plus size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;

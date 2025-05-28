import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/sidebar';
import DashboardMainContent from './components/DashBoardMainContent/DashboardOverview';



function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;

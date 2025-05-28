import React from 'react';
import '../../styles/ActivityFeed.css';

const ActivityFeed = () => (
  <section className="activity-feed">
    <h3>Activity</h3>
    <p>3 appointments this week</p>
    <div className="bar-chart">
      {}
      <div className="bar" style={{ height: '60%' }} />
      <div className="bar" style={{ height: '80%' }} />
      <div className="bar" style={{ height: '40%' }} />
      <div className="bar" style={{ height: '90%' }} />
      <div className="bar" style={{ height: '20%' }} />
      <div className="bar" style={{ height: '56%' }} />
      <div className="bar" style={{ height: '46%' }} />
      <div className="bar" style={{ height: '66%' }} />
      <div className="bar" style={{ height: '10%' }} />
      <div className="bar" style={{ height: '5%' }} />
    </div>
  </section>
);

export default ActivityFeed;


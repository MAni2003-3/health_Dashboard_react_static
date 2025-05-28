import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../../styles/DashboardOverview.css';




const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      {}
      <div className="overview-top">
        <AnatomySection />
        <div className="overview-side">
        
          <CalendarView />
        </div>
      </div>

      {}
      <div className="overview-bottom">
        <ActivityFeed />
        <UpcomingSchedule />
      </div>
    </section>
  );
};

export default DashboardOverview;

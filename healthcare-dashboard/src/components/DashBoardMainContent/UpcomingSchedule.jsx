import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => (
  <section className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>

    <div className="schedule-day">
      <h4>On Thursday</h4>
      <div className="appointment-grid">
        <div className="appointment-box">
          <SimpleAppointmentCard title="Ophthalmologist" time="10:00 AM" />
        </div>
        <div className="appointment-box">
          <SimpleAppointmentCard title="Cardiologist" time="2:00 PM" />
        </div>
      </div>
    </div>

    <div className="schedule-day">
      <h4>On Saturday</h4>
      <div className="appointment-grid">
        <div className="appointment-box">
          <SimpleAppointmentCard title="Neurologist" time="1:00 PM" />
        </div>
      </div>
    </div>
  </section>
);

export default UpcomingSchedule;


import React from 'react';
import '../../styles/CalendarView.css';


const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const calendarDays = [
  { day: '1', times: [] },
  { day: '2', times: [] },
  { day: '3', times: ['09:00', '13:00'] },
  { day: '4', times: ['11:00'] },
  { day: '5', times: [] },
  { day: '6', times: ['15:00'] },
  { day: '7', times: [] },
  { day: '8', times: [] },
  { day: '9', times: [] },
  { day: '10', times: [] },
  { day: '11', times: ['09:00', '15:00'] },
  { day: '12', times: [] },
  { day: '13', times: ['13:00'] },
  { day: '14', times: [] },
  // Add more days as needed
];

const CalendarView = () => (
  <section className="calendar-view">
    <h3>October 2021</h3>
    
    <div className="calendar-grid-header">
      {daysOfWeek.map((day, i) => (
        <div key={i} className="calendar-header-day">{day}</div>
      ))}
    </div>

    <div className="calendar-grid">
      {calendarDays.map((item, index) => (
        <div key={index} className="calendar-day">
          <div className="calendar-day-number">{item.day}</div>
          <div className="calendar-day-times">
            {item.times.map((time, i) => (
              <div key={i} className="calendar-time">{time}</div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="appointment-summary">
      <div className="appointment-card">Dentist @ 11:00</div>
      <div className="appointment-card">Physiotherapy @ 15:00</div>
    </div>
  </section>
);

export default CalendarView;


import React from 'react';
import '../../styles/SimpleAppointmentCard.css';
const SimpleAppointmentCard = ({ title, time }) => (
  <div className="simple-appointment-card">
    <strong>{title}</strong>
    <span>{time}</span>
  </div>
);

export default SimpleAppointmentCard;

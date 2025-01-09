import React from "react";
import "../styles/Schedule.css";

const scheduleItems = [
  { time: "09:00 AM", event: "Registration", location: "Main Hall" },
  { time: "10:00 AM", event: "Keynote Speech", location: "Conference Room A" },
  { time: "01:00 PM", event: "Networking Session", location: "Lobby" },
];

const Schedule: React.FC = () => (
  <section className="schedule">
    <h2>Schedule</h2>
    <ul>
      {scheduleItems.map((item, index) => (
        <li key={index}>
          <div className="time">{item.time}</div>
          <div className="event-details">
            <div className="event">{item.event}</div>
            <div className="location">{item.location}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Schedule;
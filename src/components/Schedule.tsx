import React from "react";
import "../styles/Schedule.css";

const Schedule: React.FC = () => (
  <section className="schedule">
    <h2>Schedule</h2>
    <ul>
      <li><strong>09:00 AM</strong> - Registration</li>
      <li><strong>10:00 AM</strong> - Keynote Speech</li>
      <li><strong>01:00 PM</strong> - Networking Session</li>
    </ul>
  </section>
);

export default Schedule;
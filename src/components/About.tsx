import React from "react";
import "../styles/About.css";

const About: React.FC = () => (
  <section className="about">
    <h2>About the Event</h2>
    <p>
      Welcome to our annual event where industry leaders and professionals come together to share insights, network, and learn about the latest trends and innovations. Join us for a day filled with inspiring talks, engaging sessions, and valuable networking opportunities.
    </p>
    <div className="highlights">
      <h3>Event Highlights</h3>
      <ul>
        <li>Keynote speeches from industry leaders</li>
        <li>Interactive workshops and sessions</li>
        <li>Networking opportunities with professionals</li>
        <li>Exhibition of the latest products and services</li>
        <li>Exclusive insights and trends</li>
      </ul>
    </div>
    <div className="cta">
      <button>Learn More</button>
    </div>
  </section>
);

export default About;
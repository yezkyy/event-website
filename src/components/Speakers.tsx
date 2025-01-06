import React from "react";
import "../styles/Speakers.css";
import johnDoeImage from "../assets/john-doe.png";
import janeSmithImage from "../assets/jane-smith.png";

const speakers = [
  { name: "John Doe", bio: "Expert in Technology and Innovation.", image: johnDoeImage },
  { name: "Jane Smith", bio: "Renowned Marketing Strategist.", image: janeSmithImage },
];

const Speakers: React.FC = () => (
  <section className="speakers">
    <h2>Speakers</h2>
    <ul>
      {speakers.map((speaker, index) => (
        <li key={index}>
          <img src={speaker.image} alt={speaker.name} />
          <div className="speaker-info">
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Speakers;
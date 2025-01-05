import React from "react";

const speakers = [
  { name: "John Doe", bio: "Expert in Technology and Innovation." },
  { name: "Jane Smith", bio: "Renowned Marketing Strategist." },
];

const Speakers: React.FC = () => (
  <section className="speakers">
    <h2>Speakers</h2>
    <ul>
      {speakers.map((speaker, index) => (
        <li key={index}>
          <h3>{speaker.name}</h3>
          <p>{speaker.bio}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Speakers;
import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Budha Girl",
      logo: "budhagirl-logo.jpeg",
      link: "https://budhagirl.co.uk/",
    },
    {
      id: 2,
      name: "Maui Divers",
      logo: "maui-diver-logo.png",
      link: "https://www.mauidivers.com/",
    },

    {
      id: 3,
      name: "Inkbird",
      logo: "inkbird-logo.png",
      link: "https://inkbird.com/",
    },
    {
      id: 4,
      name: "JazzHunt",
      logo: "jazz-hunt-logo.png",
      link: "https://jazzhunt.ca/",
    },
    {
      id: 7,
      name: "West Coast Tees",
      logo: "west-coast-tees-logo.png",
      link: "https://www.westcoastees.com/",
    },
    {
      id: 5,
      name: "DiffRead",
      logo: "diff-read-logo.png",
      link: "https://diffread.com/",
    },

    {
      id: 6,
      name: "TitDa",
      logo: "titda-logo.png",
      link: "http://titdamanchester.com/",
    },

    {
      id: 8,
      name: "Truth Pulse",
      logo: "truth-logo.png",
      link: "https://truth-pulse-rho.vercel.app/",
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null); // Track the hovered item

  return (
    <div className="portfolio">
      <h2 className={`title ${hoveredItem !== null ? "fade-out" : ""}`}>
        Portfolio
      </h2>{" "}
      {/* Fade out title */}
      <div className="projects">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="portfolio-item"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredItem(project.id)} // Set hovered item on hover
            onMouseLeave={() => setHoveredItem(null)} // Reset hovered item when hover ends
          >
            <img src={project.logo} alt={project.name} />
            <span
              className={`project-name ${
                hoveredItem === project.id ? "fade-in" : ""
              }`}
            >
              {project.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

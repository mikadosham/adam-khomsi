import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      logo: "budhagirl-logo.jpeg",
      link: "https://budhagirl.co.uk/",
    },
    {
      id: 2,
      name: "Project 2",
      logo: "diff-read-logo.png",
      link: "https://diffread.com/",
    },
    {
      id: 3,
      name: "Project 3",
      logo: "inkbird-logo.png",
      link: "https://inkbird.com/",
    },
    {
      id: 4,
      name: "Project 4",
      logo: "jazz-hunt-logo.png",
      link: "https://jazz-hunt.vercel.app/",
    },
    {
      id: 5,
      name: "Project 5",
      logo: "maui-diver-logo.png",
      link: "https://www.mauidivers.com/",
    },
    {
      id: 6,
      name: "Project 2",
      logo: "diff-read-logo.png",
      link: "https://diffread.com/",
    },
    {
      id: 7,
      name: "Project 3",
      logo: "inkbird-logo.png",
      link: "https://inkbird.com/",
    },
    {
      id: 8,
      name: "Project 4",
      logo: "jazz-hunt-logo.png",
      link: "https://jazz-hunt.vercel.app/",
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div>
        {projects.map((project) => (
          <a
            style={project.id === 4 ? { opacity: "0.5" } : {}}
            key={project.id}
            href={project.link}
            className="portfolio-item"
          >
            <img src={project.logo} alt={project.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

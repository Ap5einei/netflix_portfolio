import React from 'react';
import './Projects.css';
import { FaGithub, FaItchIo, FaUnity } from 'react-icons/fa';
import { SiSharp, SiBlender } from 'react-icons/si';

import africanTähti from '../images/AfricanTähti.png';


interface Project {
  title: string;
  description: string;
  image: string;
  techUsed: string[];
  links: {
    github?: string;
    itchio?: string;
  };
  type: 'game' | 'tool' | 'prototype';
}

const projects: Project[] = [

  {
    title: "BubbleElements",
    description: "Finnish Game Jam/Global Game Jam 2025 project. A game about Bubble and Elements exploring environments. Developed as part of a team where I served as the programmer.",
    image: "/path-to-raiz-image.jpg", // Add actual image path
    techUsed: ["Unity", "C#", "Blender"],
    links: {
      itchio: "https://devben.itch.io/bubblelemets"
    },
    type: "game"
  },
  {
    title: "Afrikan Tähti",
    description: "Portfolio project learning Machine Learning. A  board game about The Star Of Africa and exploring environments. Developed as part of a team where I served as as programmer,UI/UX Designer.",
    image:africanTähti, // Add actual image path
    techUsed: ["Unity", "Godot", "C++", "C#", "Blender"],
    links: {
      github: "https://github.com/naigelt/Machine_Learning_Project"
    },
    type: "game"
  },
  {
    title: "Raiz of the Roots",
    description: "Finnish Game Jam 2023 project. A game about growing roots and exploring underground environments. Developed as part of a team where I served as the programmer.",
    image: "/path-to-raiz-image.jpg", // Add actual image path
    techUsed: ["Unity", "C#", "Blender"],
    links: {
      itchio: "https://alexjilkin.itch.io/raiz-of-the-roots"
    },
    type: "game"
  },
  {
    title: "Space Bread",
    description: "XAMK Game Jam 2023 solo project. A 2D platformer game where you play as a piece of bread in space. Features unique gravity mechanics and challenging levels.",
    image: "/path-to-space-bread-image.jpg", // Add actual image path
    techUsed: ["Unity", "C#"],
    links: {
      itchio: "https://devben.itch.io/space-bread"
    },
    type: "game"
  },
  {
    title: "Merlin Card Game",
    description: "A card-based game project showcasing deck building and card battle mechanics. Built with modern game development practices and clean architecture.",
    image: "/path-to-merlin-image.jpg", // Add actual image path
    techUsed: ["Unity", "C#"],
    links: {
      itchio: "https://devben.itch.io/merlin-card-game" // Update with actual GitHub link
    },
    type: "game"
  }
];

const techIcons: { [key: string]: JSX.Element } = {
  "Unity": <FaUnity />,
  "C#": <SiSharp />,
  "Blender": <SiBlender />
};

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.type}`}
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.links.itchio && (
                  <a href={project.links.itchio} target="_blank" rel="noopener noreferrer">
                    <FaItchIo /> Itch.io
                  </a>
                )}
              </div>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techUsed.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

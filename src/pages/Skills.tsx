import React from 'react';
import { 
  FaGamepad, FaUnity, FaCode, FaVrCardboard 
} from 'react-icons/fa';
import { 
  SiSharp, SiPython, SiBlender, SiGoogleanalytics,
  SiUnity, SiGit
} from 'react-icons/si';
import './Skills.css';

const skillsData = {
  'Game Development': [
    { name: 'Unity', icon: <SiUnity /> as JSX.Element },
    { name: 'C#', icon: <SiSharp /> as JSX.Element },
    { name: 'Blender', icon: <SiBlender /> as JSX.Element },
    { name: 'Krita', icon: <FaGamepad /> as JSX.Element },
  ],
  'XR Development': [
    { name: 'VR Development', icon: <FaVrCardboard /> as JSX.Element },
    { name: 'Unity XR', icon: <SiUnity /> as JSX.Element },
  ],
  'Programming': [
    { name: 'C#', icon: <SiSharp /> as JSX.Element },
    { name: 'C++', icon: <FaCode /> as JSX.Element },
    { name: 'Python', icon: <SiPython /> as JSX.Element },
    { name: 'SQL', icon: <FaCode /> as JSX.Element },
  ],
  'Tools & Analytics': [
    { name: 'Git', icon: <SiGit /> as JSX.Element },
    { name: 'Google Analytics', icon: <SiGoogleanalytics /> as JSX.Element },
  ]
};

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-items">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

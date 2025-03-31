import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const workExperience = [
  {
    title: "XR Developer",
    company: "Helsinki XR Center",
    date: "2025",
    type: "work",
    description: "XR development and research",
  },
  {
    title: "Puhelin Myyjä",
    company: "Pasastar OY",
    date: "2022",
    type: "work",
    description: "Phone sales and customer service",
  },
  {
    title: "Moving Assistant",
    company: "Opiskelija Muutot",
    date: "2021",
    type: "work",
    description: "Moving services",
  },
  {
    title: "Office Intern",
    company: "Helsinki Rescue Department",
    date: "2020",
    type: "work",
    description: "Administrative support and office duties",
  },
  {
    title: "Youth Worker",
    company: "City of Helsinki Youth Affairs Center - Kettutie Youth Center",
    date: "2015",
    type: "work",
    description: "Youth activities coordination",
  },
  {
    title: "Work Practice (TET)",
    company: "Alepa Erätori",
    date: "2014-2017",
    type: "work",
    description: "Retail experience and customer service",
  },
  {
    title: "Game Programming",
    company: "Metropolia University of Applied Sciences",
    date: "2024",
    type: "education",
    description: "Game development and programming studies",
  },
  {
    title: "Game Programming",
    company: "South-Eastern Finland University of Applied Sciences",
    date: "2022",
    type: "education",
    description: "Game development fundamentals",
  },
  {
    title: "High School Diploma",
    company: "Eira Adult High School",
    date: "2019",
    type: "education",
    description: "General education",
  }
];

const WorkExperience: React.FC = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">📅 Work Experience & Education</h2>
      <VerticalTimeline>
        {workExperience.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.type}`}
            contentStyle={{
              background: item.type === "work" 
                ? index === 0 
                  ? 'rgb(33, 150, 243)' 
                  : 'rgb(240, 240, 240)'
                : 'rgb(255, 224, 230)',
              color: '#000'
            }}
            contentArrowStyle={{
              borderRight: item.type === "work"
                ? index === 0 
                  ? '7px solid rgb(33, 150, 243)'
                  : '7px solid rgb(240, 240, 240)'
                : '7px solid rgb(255, 224, 230)'
            }}
            date={item.date}
            iconStyle={{
              background: item.type === "work"
                ? 'rgb(33, 150, 243)'
                : 'rgb(255, 160, 200)',
              color: '#fff'
            }}
            icon={item.type === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;

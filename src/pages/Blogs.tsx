import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev, FaXRay, FaYoutube, FaResearchgate } from 'react-icons/fa';

const blogs = [
  {
    title: "Lahdenväylä",
    platform: "Helsinki XR Center",
    icon: <FaResearchgate/>,
    link: "https://helsinkixrcenter.com/",
    description: "Learn to make sustainable innovative experience with AI in XR.",
  },
  {
    title: "Gamedev  Videos",
    platform: "Youtube",
    icon: <FaYoutube/>,
    link: "https://www.youtube.com/@benjaminmasena183",
    description: "Gameplay videos games i have developed.",
  },
  
 
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

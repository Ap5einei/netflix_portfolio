import React from 'react';
import './ContactMe.css';
import profilePic from '../images/Benjamin Portfolio.jpg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  // Staattiset tiedot
  const userData = {
    name: "Benjamin Masena",
    title: "Software Developer & Game Designer",
    summary: "Passionate about creating innovative solutions and immersive experiences through technology.",
    companyUniversity: "Helsinki XR Center | Metropolia Ammattikorkeakoulu",
    linkedinLink: "https://www.linkedin.com/in/benjamin-masena-151090247/",
    email: "benjamin.masena@gmail.com",
    phoneNumber: "+358 451 209 53",
  };

  return (
    <div className="contact-container">
      {/* LinkedIn Badge */}
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Benjamin Masena" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      {/* Contact Header */}
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        {/* Email */}
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>

        {/* Fun Section */}
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

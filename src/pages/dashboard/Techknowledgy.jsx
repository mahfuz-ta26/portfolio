import React from 'react';
import '../Css/Techknowledgy.css';
import { FaReact, FaNode, FaDatabase, FaGithub, FaLaptopCode, FaRocket } from 'react-icons/fa';


const Techknowledgy = () => {
  return (
    <div className="tech-holder">
      <div className="infoTech">
        <h1>Familiar Technologies...</h1>
        {/* <div className="hori1"></div> */}
      </div>

      <div className="skills-list">
        <div className="tech-card">
          <div className="icon-container">
            <FaReact className="tech-icon" />
          </div>
          <h2>Frontend:</h2>
          <p>React, Redux, HTML5, CSS3</p>
        </div>

        <div className="tech-card">
          <div className="icon-container">
            <FaNode className="tech-icon" />
          </div>
          <h2>BackEnd:</h2>
          <p>Node.js, Express.js, MongoDB</p>
        </div>

        <div className="tech-card">
          <div className="icon-container">
            <FaDatabase className="tech-icon" />
          </div>
          <h2>Database:</h2>
          <p>MongoDB, Mongoose</p>
        </div>

        <div className="tech-card">
          <div className="icon-container">
            <FaGithub className="tech-icon" />
          </div>
          <h2>Version Control:</h2>
          <p>Git, GitHub</p>
        </div>

        <div className="tech-card">
          <div className="icon-container">
            <FaRocket className="tech-icon" />
          </div>
          <h2>Deployment & Tools:</h2>
          <p>Heroku, Netlify, Vercel, VS Code, Figma, Firebase, Chrome DevTools</p>
        </div>

        <div className="tech-card">
          <div className="icon-container">
            <FaLaptopCode className="tech-icon" />
          </div>
          <h2>Programming Language:</h2>
          <p>C++, JavaScript</p>
        </div>
      </div>
    </div>
  );
}

export default Techknowledgy;

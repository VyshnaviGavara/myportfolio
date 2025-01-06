import React, { useState } from 'react';

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails); // Proper toggle logic
  };

  return (
    <section id="projects">
      <h2 onClick={toggleDetails}>Projects</h2>
      {showDetails && (
        <div className="details">
          <div>
            <h3>Unity Web Application</h3>
            <p><em>Mar 2024 - May 2024</em></p>
            <ul>
              <li>Developed a platform connecting customers with verified home appliance service providers.</li>
              <li>Implemented user authentication and provider registration with JWT and Express.js.</li>
              <li>Enhanced scalability and reliability through optimized database and REST APIs.</li>
            </ul>
            <h4>CareerAlign Web Application</h4>
            <p><em>Jun 2022 – Dec 2022</em></p>
            <ul>
              <li>Developed a web application to streamline the recruitment process by enabling student profile management and employer access.</li>
              <li>Facilitated profile creation for students to detail their educational and professional experiences, while providing advanced search and filtering tools for employers to identify ideal candidates efficiently.</li>
              <li>Developed the backend using Express.js, utilizing PostgreSQL for robust data management and GraphQL for high-performance API interactions, ensuring optimal responsiveness and user experience</li>
              <li>Designed and maintained a scalable system architecture to support high user traffic and data volumes, enhancing system reliability and performance through strategic database optimizations and query tuning.</li>
            </ul>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

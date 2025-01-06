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
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

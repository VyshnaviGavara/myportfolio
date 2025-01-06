import React, { useState } from 'react';

const Experience = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails); // Proper toggle logic
  };

  return (
    <section id="experience">
      <h2 onClick={toggleDetails}>Experience</h2>
      {showDetails && (
        <div className="details">
          <div>
            <h3>Quadrant Resource Pvt. Ltd - Software Engineer Intern</h3>
            <p><em>May 2022 - Dec 2022</em></p>
            <ul>
              <li>Developed scalable backend web APIs using Express.js, Postgres, and GraphQL.</li>
              <li>Optimized database queries, reducing latency and improving responsiveness.</li>
              <li>Enhanced system scalability by 60% and improved peak performance by 40%.</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;

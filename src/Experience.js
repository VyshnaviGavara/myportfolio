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
          <h3>Saint Louis University — Patron Services Student Lead (Current Role)</h3>
            <ul>
              <li>Spearheaded the migration of library systems to a cloud-based solution, reducing downtime by 25% and improving system accessibility.</li>
              <li>Managed database updates and backups for library management software Sierra, ensuring data integrity and reliability.</li>
              <li>Provided technical support for library systems, resolving over 95% of incidents within the first contact.</li>
              <li>Supervised a team of students, ensuring accurate cataloging and user support.</li>
            </ul>
            <h3>Quadrant Resource Pvt. Ltd - Software Engineer Intern</h3>
            <p><em>May 2022 - Dec 2022</em></p>
            <ul>
              <li>Developed scalable backend web APIs using Express.js, Postgres, and GraphQL.</li>
              <li>Optimized database queries, reducing latency and improving responsiveness.</li>
              <li>Enhanced system scalability by 60% and improved peak performance by 40%.</li>
            </ul>
            <h3>Globalshala Pvt. Ltd-Data Analyst Intern</h3>
            <p><em>Jun 2022 – July 2022</em></p>
            <ul>
              <li>Enhanced data accessibility, fostering profound understanding of complex datasets for informed decision making and project success.</li>
              <li>Produced clear and concise visuals with Matplotlib, Seaborn and plot elevating data accessibility and aiding effective communication.</li>
	            <li>Implemented strategies for large datasets, ensuring insights are easily understood by both technical and non-technical stake holders.</li>
              <li>Played a pivotal role in actively pitching creative ideas for designing impactful visualizations.</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;

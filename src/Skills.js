import React, { useState } from 'react';

const Skills = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails); // Proper toggle logic
  };

  return (
    <section id="skills">
      <h2 onClick={toggleDetails}>Skills</h2>
      {showDetails && (
        <div className="details">
          <ul>
            <li><strong>Programming Languages:</strong> JavaScript, Java, Python, SQL, HTML, CSS</li>
            <li><strong>Frameworks:</strong> Node.js, React.js, Microservices</li>
            <li><strong>Database:</strong> MySQL, Postgres, MongoDB</li>
            <li><strong>Tools:</strong> Git, Docker, Jira</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Skills;

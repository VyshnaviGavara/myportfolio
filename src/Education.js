import React, { useState } from 'react';

const Education = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails); // Proper toggle logic
  };

  return (
    <section id="education">
      <h2 onClick={toggleDetails}>Education</h2>
      {showDetails && (
        <div className="details">
          <div>
            <h3>Saint Louis University, St. Louis, Missouri</h3>
            <p><em>Jan 2022 - Present</em></p>
            <p>Master of Science in Computer Science</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;

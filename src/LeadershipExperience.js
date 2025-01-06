import React, { useState } from 'react';

const LeadershipExperience = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails); // Proper toggle logic
  };

  return (
    <section id="leadershipexperience">
      <h2 onClick={toggleDetails}>Leadership Experience</h2>
      {showDetails && (
        <div className="details">
          <ul>
            <li>Responsible for recruiting new volunteers and providing them with necessary training and resources to effectively participate in projects that permanently impact villages, old-age homes, orphanages, and government schools.</li>
            <li>Served as the core team member and helped organize over 10+ seminars & workshops to help juniors to help them understand the various opportunities for their careers.</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default LeadershipExperience;

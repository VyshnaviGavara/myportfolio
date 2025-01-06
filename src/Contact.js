import React, { useState } from 'react';

const Contact = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails); // Proper toggle logic
  };

  return (
    <section id="contact">
      <h2 onClick={toggleDetails}>Contact</h2>
      {showDetails && (
        <div className="details">
          <p>Email: <a href="mailto:vyshnavigavara2022@gmail.com">vyshnavigavara2022@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/vyshnavi-gavara-580797298">Vyshnavi Gavara</a></p>
          <p>Phone: +1 (314) 7327989</p>
        </div>
      )}
    </section>
  );
};

export default Contact;

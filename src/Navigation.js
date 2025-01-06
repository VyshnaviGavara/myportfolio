// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="#skills">Skills</Link>
      <Link to="#experience">Experience</Link>
      <Link to="#projects">Projects</Link>
      <Link to="#education">Education</Link>
      <Link to="#contact">Contact</Link>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

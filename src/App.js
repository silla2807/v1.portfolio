import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SkillGallery from './components/SkillGallery';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Navbar Component */}
      <Navbar />

      {/* Intro Section */}
      <section id="intro">
        <h1>Welcome to My Portfolio</h1>
        <Intro />
      </section>

      {/* About Section */}
      <section id="about" style={{ marginTop: '-7rem' }}>
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ marginTop: '-7rem' }}>
        <Experience />
      </section>

      {/* Skill Gallery */}
      <section id="skillGallery" style={{ marginTop: '-7rem' }}>
        <SkillGallery />
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ marginTop: '-8rem' }}>
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
export default App;

import React, { useState, useEffect } from 'react';
import './Home3.css';

const Home3 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('design');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    { id: 'design', title: 'Design', color: '#FF6B6B' },
    { id: 'develop', title: 'Develop', color: '#4ECDC4' },
    { id: 'deliver', title: 'Deliver', color: '#45B7D1' }
  ];

  return (
    <div className="home3-container">
      <div 
        className="gradient-bg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(255,255,255,0.1) 0%,
            rgba(0,0,0,0) 50%)`
        }}
      />
      
      <nav className="nav-menu">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
            style={{
              '--hover-color': section.color
            }}
          >
            {section.title}
          </button>
        ))}
      </nav>

      <main className="content">
        <h1 className="main-title">
          <span className="creative">Creative</span>
          <span className="studio">Studio</span>
        </h1>
        
        <div className="section-content">
          {sections.map(section => (
            <div 
              key={section.id}
              className={`section ${activeSection === section.id ? 'active' : ''}`}
              style={{ '--section-color': section.color }}
            >
              <h2>{section.title}</h2>
              <p>Exploring the boundaries of digital experiences through thoughtful {section.title.toLowerCase()} solutions.</p>
            </div>
          ))}
        </div>
      </main>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
};

export default Home3; 
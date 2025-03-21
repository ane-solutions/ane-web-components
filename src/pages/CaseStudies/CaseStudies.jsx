import React, { useState, useEffect } from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCase, setActiveCase] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;

      document.querySelectorAll('.case-card').forEach(card => {
        card.style.transform = `translateZ(20px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
      });

      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Project One",
      description: "Brief description of project one",
      thumbnail: "// Add path to thumbnail image",
      videoUrl: "// Add path to video clip"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Brief description of project two",
      thumbnail: "// Add path to thumbnail image",
      videoUrl: "// Add path to video clip"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Brief description of project three",
      thumbnail: "// Add path to thumbnail image",
      videoUrl: "// Add path to video clip"
    },
    {
      id: 4,
      title: "Project Four",
      description: "Brief description of project four",
      thumbnail: "// Add path to thumbnail image",
      videoUrl: "// Add path to video clip"
    }
  ];

  return (
    <div className="casestudies-container">
      <div className="animated-bg">
        <div 
          className="gradient-circle circle-1"
          style={{
            transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`
          }}
        />
        <div 
          className="gradient-circle circle-2"
          style={{
            transform: `translate(${-mousePosition.x / 50}px, ${-mousePosition.y / 50}px)`
          }}
        />
      </div>

      <div className="welcome-text">
        <h1>Case Studies</h1>
        <p>Explore our featured projects</p>
      </div>

      <div className="case-studies-layout">
        <div className="main-display">
          {activeCase ? (
            <div className="featured-case">
              <video 
                key={activeCase.id}
                className="case-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={activeCase.videoUrl} type="video/mp4" />
              </video>
              <div className="case-info">
                <h2>{activeCase.title}</h2>
                <p>{activeCase.description}</p>
              </div>
            </div>
          ) : (
            <div className="featured-case empty">
              <h2>Hover over a project to see details</h2>
            </div>
          )}
        </div>

        <div className="case-cards">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="case-card"
              onMouseEnter={() => setActiveCase(caseStudy)}
              onMouseLeave={() => setActiveCase(null)}
            >
              <div className="case-card-content">
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
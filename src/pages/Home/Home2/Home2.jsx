import React, { useEffect, useState } from 'react';
import './Home2.css';

const Home2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;

      document.querySelectorAll('.card').forEach(card => {
        card.style.transform = `translateZ(20px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
      });

      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    {
      title: "Interactive Design",
      description: "Experience fluid animations and responsive interactions that make the interface come alive."
    },
    {
      title: "Modern Aesthetics",
      description: "Clean, minimalist design with a focus on typography and spatial harmony."
    },
    {
      title: "Dynamic Elements",
      description: "Watch as elements respond to your movements, creating an immersive experience."
    }
  ];

  return (
    <div className="home2-container">
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
        <h1>Welcome to the Future</h1>
        <p>Explore our interactive design system</p>
      </div>

      <div className="floating-cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2; 
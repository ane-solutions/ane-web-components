import React, { useEffect, useState } from 'react';
import './Home1.css';

const Home1 = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      setTimeOfDay(getTimeClass(hour));
    };

    updateTimeOfDay(); 
    const interval = setInterval(updateTimeOfDay, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getTimeClass = (hour) => {
    if (hour >= 5 && hour < 8) return 'sunrise';
    if (hour >= 8 && hour < 16) return 'day';
    if (hour >= 16 && hour < 19) return 'sunset';
    return 'night';
  };

  return (
    <div 
      className={`home-container ${timeOfDay}`}
      style={{
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
          rgba(255,255,255,0.4) 0%,
          ${timeOfDay === 'sunrise' ? '#ffc4b7' : 
            timeOfDay === 'day' ? '#b7deff' : 
            timeOfDay === 'sunset' ? '#ffb7b7' : 
            '#2a2a4f'} 25%)`
      }}
    >
      <h1>This is Home Page Version 1</h1>
      <p>Welcome to the first version of our home page!</p>
    </div>
  );
};

export default Home1;

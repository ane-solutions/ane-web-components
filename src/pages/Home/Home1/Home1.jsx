import React, { useEffect, useState } from 'react';
import './Home1.css';

const Home1 = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      setTimeOfDay(getTimeClass(hour));
    };

    updateTimeOfDay(); 
    const interval = setInterval(updateTimeOfDay, 60000);

    return () => clearInterval(interval);
  }, []);

  const getTimeClass = (hour) => {
    if (hour >= 5 && hour < 8) return 'sunrise';
    if (hour >= 8 && hour < 16) return 'day';
    if (hour >= 16 && hour < 19) return 'sunset';
    return 'night';
  };

  return (
    <div className={`home-container ${timeOfDay}`}>
      <h1>This is Home Page Version 1</h1>
      <p>Welcome to the first version of our home page!</p>
    </div>
  );
};

export default Home1;

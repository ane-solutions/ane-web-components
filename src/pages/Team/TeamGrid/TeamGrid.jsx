import React, { useEffect, useState } from 'react';
import './TeamGrid.css';

const TeamGrid = ({ teamMembers = [] }) => {
  const [animatingIndex, setAnimatingIndex] = useState(-1);
  
  useEffect(() => {
    // Start animation sequence
    if (teamMembers.length > 0) {
      setAnimatingIndex(0);
    }
  }, [teamMembers]);

  // Handle animation end for current card
  const handleAnimationEnd = (index) => {
    if (index < teamMembers.length - 1) {
      setAnimatingIndex(index + 1);
    }
  };

  return (
    <div className="team-grid-container">
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div 
            className={`team-card ${index <= animatingIndex ? 'animate' : ''}`} 
            key={member.id || index}
            onAnimationEnd={() => index === animatingIndex && handleAnimationEnd(index)}
          >
            <div className="team-card-image">
              <img src={member.photo} alt={`${member.name}`} />
            </div>
            <div className="team-card-content">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage:
// const teamData = [
//   {
//     id: 1,
//     name: "Jane Doe",
//     role: "CEO & Founder",
//     photo: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 2,
//     name: "John Smith",
//     role: "Lead Developer",
//     photo: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     id: 3,
//     name: "Sarah Johnson",
//     role: "UX Designer",
//     photo: "https://randomuser.me/api/portraits/women/68.jpg"
//   }
//   // Add more team members...
// ];
// 
// <TeamGrid teamMembers={teamData} />

export default TeamGrid;
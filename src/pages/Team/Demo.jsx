import TeamGrid from './TeamGrid/TeamGrid';

const Demo = () => {
  // Sample team data
  const teamData = [
    {
      id: 1,
      name: "Jane Doe",
      role: "CEO & Founder",
      photo: "/images/jane.jpg"
    },
    {
      id: 2,
      name: "John Smith",
      role: "Lead Developer",
      photo: "/images/john.jpg"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "UX Designer",
      photo: "/images/sarah.jpg"
    }
    // Add more team members as needed
  ];

  return (
    <div className="app">
      <h1>Our Team</h1>
      <TeamGrid teamMembers={teamData} />
    </div>
  );
};
import TeamGrid from './TeamGrid/TeamGrid';

const Demo = () => {
  // Sample team data
  const teamData = [
    {
      id: 1,
      name: "Jane Doe",
      role: "CEO & Founder",
      photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "John Smith",
      role: "Lead Developer",
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "UX Designer",
      photo: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Marketing Director",
      photo: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  return (
    <div className="app">
      <h1>Our Team</h1>
      <TeamGrid teamMembers={teamData} />
    </div>
  );
};

export default Demo;
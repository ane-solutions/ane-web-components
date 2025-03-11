import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TeamGrid from './pages/Team/TeamGrid/TeamGrid'
// IMPORT PAGES HERE
import './App.css'

function App() {
  const [count, setCount] = useState(0)
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
    // Add more team members as needed
  ];

  return (
    <>
     <div>
      <h1>COMPONENTS V1</h1>
      <div>
        {/* IMPORT COMPONENTS HERE */}
      </div>
      <TeamGrid teamMembers={teamData} />
      <h1>PAGES</h1>
      <div>
        {/* IMPORT PAGES HERE */}
      </div>
     </div>
     
    </>
  )
}

export default App

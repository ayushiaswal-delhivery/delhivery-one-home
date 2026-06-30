import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import B2CContent from './components/B2CContent'

export default function App() {
  const [persona, setPersona] = useState('all')

  return (
    <div className="app">
      <Sidebar persona={persona} onPersonaChange={setPersona} />
      <div className="main">
        <TopBar />
        <B2CContent role={persona === 'support' ? 'support' : 'owner'} />
      </div>
    </div>
  )
}

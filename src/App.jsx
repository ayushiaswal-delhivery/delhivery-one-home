import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import B2CContent from './components/B2CContent'
import B2BContent from './components/B2BContent'

export default function App() {
  const [persona, setPersona] = useState('all')
  const [service, setService] = useState('b2c')

  return (
    <div className="app">
      <Sidebar persona={persona} onPersonaChange={setPersona} />
      <div className="main">
        <TopBar activeService={service} onServiceChange={setService} />
        {service === 'b2b'
          ? <B2BContent />
          : <B2CContent role={persona === 'support' ? 'support' : 'owner'} />
        }
      </div>
    </div>
  )
}

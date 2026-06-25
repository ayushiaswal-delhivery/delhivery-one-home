import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import PageTabs from './components/PageTabs'
import CurrentContent from './components/CurrentContent'
import B2BContent from './components/B2BContent'
import B2CContent from './components/B2CContent'

export default function App() {
  const [persona, setPersona] = useState('all')
  const [activeTab, setActiveTab] = useState('b2c')

  return (
    <div className="app">
      <Sidebar persona={persona} onPersonaChange={setPersona} />
      <div className="main">
        <TopBar />
        <PageTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'current' && <CurrentContent persona={persona} />}
        {activeTab === 'b2b'     && <B2BContent />}
        {activeTab === 'b2c'     && <B2CContent />}
      </div>
    </div>
  )
}

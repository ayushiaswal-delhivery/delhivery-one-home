import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import B2CContent from './components/B2CContent'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <TopBar />
        <B2CContent />
      </div>
    </div>
  )
}

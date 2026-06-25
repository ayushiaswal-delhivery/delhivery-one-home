import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@delhivery/tarmac/dist/style.css'
import './styles.css'
import App from './App'
import { ThemeProvider } from '@delhivery/tarmac'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)

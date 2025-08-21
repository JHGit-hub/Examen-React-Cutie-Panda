import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StatisticProvider } from './contexts/StatisticContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StatisticProvider>
      <App />
    </StatisticProvider>
  </StrictMode>,
)

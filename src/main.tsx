import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import SplashScreen from './SplashScreen'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Renders on top of the app (fixed, full-viewport) and unmounts itself
        after ~3-4s, on click/tap, or immediately on repeat visits this
        session — see SplashScreen.tsx for the exact behavior. */}
    <SplashScreen />
    <App />
    <Analytics />
  </StrictMode>,
)

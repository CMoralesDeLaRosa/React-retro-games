import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TimerProvider } from './context/TimerProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TimerProvider>
      <App />
    </TimerProvider>
  </BrowserRouter>
)

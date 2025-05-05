// import './style.css'
import { StrictMode } from 'react'
import App from './App.jsx'
import { createRoot } from "react-dom/client"
import './components/Fonts.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
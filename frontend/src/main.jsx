import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicAnimation from './basicAnimation.jsx'
import Sequential from './sequential.jsx'
import ScrollAnimation from './scrollanimation.jsx'
import Title from './title.jsx'
import Addition from './addition.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Title/>
   <App/>
   <Addition/>
  </StrictMode>,
)

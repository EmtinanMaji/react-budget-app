import React from 'react'
import ReactDOM from 'react-dom/client'
import '../style/index.css'
import Index from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)

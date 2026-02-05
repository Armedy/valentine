import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import Slideshow from './pages/Slideshow.jsx' // ← make sure this file exists
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home page (existing app) */}
        <Route path="/" element={<App />} />

        {/* New slideshow page */}
        <Route path="/photos" element={<Slideshow />} />

        {/* Fallback: any unknown path goes home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
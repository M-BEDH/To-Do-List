import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home.jsx'

function Routeur() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      
    </BrowserRouter>
  )
}
export default Routeur
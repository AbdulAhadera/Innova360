import { useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import Navbar from '../src/Components/Navbar.jsx'
import Router from "./Routes"
import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <div>
            <Router />
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

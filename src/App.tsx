import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

function App(){
  return <BrowserRouter>
  <Routes>
    <Route path='/signup' element={<Signup/>} />
    <Route path='/' element={<Signup/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
}

export default App

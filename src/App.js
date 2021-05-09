import React from 'react'
import Landing from './components/Landing'
import Looper from './components/Looper'
import './App.css'

export default function App() {
  return (
    <div>
      <Landing/>
      <div className='looper-container'>
      <Looper/>
      </div>
    </div>
  )
}

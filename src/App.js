import { useState } from 'react'
import pan from './assets/pan.png'
import './App.css'

function App() {

  const domain = window.location.host;
  return (
    <>
      <div>
        <a href="https://modernsatyrmedia.com" target="_blank">
                  <img src={pan} className="logo" alt="Coming Soon" />
        </a>
      </div>
      <h1>Coming Soon</h1>
      <div className="card">
              <h2>Welcome to {domain}</h2>
              <h3>Please Checkback Soon</h3>
      </div>
    </>
  )
}
export default App


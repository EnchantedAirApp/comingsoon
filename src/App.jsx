import { useState } from 'react
import pan from '/vite.png'
import './App.css'

function App() {

  const domain = window.location.host;
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
                  <img src={pan} className="logo" alt="Coming Soon" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

              <p>Welcome {Domain} Coming Soon Check Back later</p>
      </div>
    </>
  )
}

export default App

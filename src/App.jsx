import { useState } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from "./components/Layout"
import { Routes, Route } from 'react-router-dom'
import Resources from './components/Resources'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/html' element={<Resources category={"HTML"} />}></Route>
        <Route path='/css' element={<Resources category={"CSS"} />}></Route>
        <Route path='/javascript' element={<Resources category={"JavaScript"} />}></Route>
        <Route path='react' element={<Resources category={"React"} />}></Route>
        <Route path='/sanityandheadlesscms' element={<Resources category={"Sanity and headless CMS"} />}></Route>
      </Routes>
    </Layout>
  )
}

export default App


/**
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

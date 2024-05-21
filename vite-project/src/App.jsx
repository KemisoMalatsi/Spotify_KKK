import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>SPOTIFY</h1>
        <nav id='sidebar-menu'>
          <span>Home</span>
          <span>Search</span>
          <span>Theme</span>
        </nav>
        <main>
          <div className='music_list'>

            <p>Title</p>
            <img src='' alt='image'/>
            <p>artist</p>

          </div>


        </main>
      </div>

    </>
  )
}

export default App

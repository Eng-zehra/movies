import { useState } from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Movie from './components/Movie'
import TVShow from './components/TVShow'
import Animation from './components/Animation'
import Games from './components/Games'
import Novels from './components/Novels'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='/movie' element={<Movie/>} />
      <Route path='/tvshows' element={<TVShow/>} />
      <Route path='/animation' element={<Animation/>} />
      <Route path='/games' element={<Games/>} />
      <Route path='/novels' element={<Novels />} />

      </Routes>
      
    </div>
  )
}

export default App

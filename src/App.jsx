import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { Routes, Route } from 'react-router-dom'
const App = () => {

  const [sidebar, setSideBar] = useState(true);

  return (
    <>
      <Navbar setSideBar={setSideBar} />
      <Routes >
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  )
}

export default App
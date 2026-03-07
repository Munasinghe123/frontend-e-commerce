import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/open/Home'
import Login from './pages/open/Login'
import Register from './pages/open/Register'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F5F0EB]">

        <Header />

        {/* Page Content */}
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            

            {/* protected */}

          </Routes>
        </main>
        <Footer/>

      </div>
    </BrowserRouter>
  )
}

export default App

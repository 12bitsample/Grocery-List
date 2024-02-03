import './App.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import Login from '../src/pages/Login'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    
    <>
      
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>

    </>
    
  )

}

export default App

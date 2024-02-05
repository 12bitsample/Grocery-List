import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
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

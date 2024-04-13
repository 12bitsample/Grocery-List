import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import List from './pages/List.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout.jsx';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    
    <>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 4000}} />
      
      <Layout>
        <div className="pages">
            
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/list' element={<List />} />
            </Routes>
          </div>
      </Layout>
      
    </>
    
  )

}

export default App

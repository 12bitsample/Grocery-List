import { useState } from 'react';
import axios from 'axios';

export default function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  //handle input change
  const handleChange = (e) => setData(prevState => ({prevState, [e.target.name]: e.target.value }));

  //login user
  const loginUser = (e) => {
    e.preventDefault();
    axios.get('/');
  }

  return (
    <>

      <div className='container-fluid' data-bs-theme='light'>
        <form className='form-vertical-center p-4 background-gradient rounded' onSubmit={loginUser}>
          
          <label className='pb-1 fw-bold text-light'>Login</label>
        
          <input className='my-1' type="email" placeholder="Enter email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
          <input className='my-1' type="password"placeholder="Enter password"value={data.password}onChange={(e) => setData({...data, password: e.target.value})}/>
          <button className='my-1' type="submit">Login</button>

        </form>
      </div>

      
    </>
  )
}

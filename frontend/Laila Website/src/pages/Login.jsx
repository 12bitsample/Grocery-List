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
      <form onSubmit={loginUser}>
        <label>Login</label>
      
        <input type="email" placeholder="Enter email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <input type="password"placeholder="Enter password"value={data.password}onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type="submit">Login</button>

      </form>
    </>
  )
}

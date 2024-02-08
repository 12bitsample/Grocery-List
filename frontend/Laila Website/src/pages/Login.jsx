import { useState } from 'react';

export default function Login() {

  const [data, setData] = useState({
    email: ' ',
    password: ' ',
  })

  const loginUser = (e) => {
    e.preventDefault();
    alert("login firing!");
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

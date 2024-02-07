import { useState } from 'react';

export default function Login() {

  const [data,setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault();
    alert("login firing!");
  }

  return (
    <>
      <form onSubmit={loginUser}>
        <label>Login</label>
      
        <input type="email"placeholder="Enter email" />
        <input type="password"placeholder="Enter password" />
        <button type="submit">Login</button>

      </form>
    </>
  )
}

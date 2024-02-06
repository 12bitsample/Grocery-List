import React from 'react'

export default function Login() {

  const loginUser = (e) => {
    e.preventDefault()
    alert("login firing!")
  }

  return (
    <>
      <form onSubmit={loginUser}>
        <label>Login</label>
        <input type="text"placeholder= "Provide name" />
        <input type="email"placeholder="Provide email" />
        <input type="password"placeholder="Provide password" />
        <button type="submit">Login</button>

      </form>
    </>
  )
}

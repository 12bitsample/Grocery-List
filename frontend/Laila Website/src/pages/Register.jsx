import React from 'react'

export default function Register() {

  const registerUser = (e) => {
      e.preventDefault()
  }

  return (
    <>
      <form onSubmit={registerUser}>
        <label>Register</label>
        <input type="text"placeholder= "Provide name" />
        <input type="email"placeholder="Provide email" />
        <input type="password"placeholder="Provide password" />
        <button type="submit">Submit</button>

      </form>
    </>
  )
}

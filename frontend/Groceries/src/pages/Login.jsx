import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <>
      <div className="container-fluid" data-bs-theme="light">
        <form className="form-vertical-center p-4 background-gradient rounded" onSubmit={handleSubmit}>
          <label className="pb-1 fw-bold text-light">Login</label>
          <input className="my-1" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail( e.target.value)}/>
          <input className="my-1" type="password"placeholder="Enter password"value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button disabled={isLoading} className="text-white btn fw-bold mt-3 btn-outline-secondary my-1" type="submit">Login</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
   </>
  )
}

export default Login;
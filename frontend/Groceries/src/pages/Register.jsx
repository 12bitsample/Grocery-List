import { useState } from "react";
import useRegister from "../hooks/useRegister.jsx";

const registerUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, error, isLoading } = useRegister();
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(email, password);
  }

  return (
      <>
        <div className="container-fluid" data-bs-theme="light">
          <form onSubmit={handleSubmit} className="form-vertical-center p-4 rounded background-gradient">
            <label className="pb-1 text-light fw-bold">Register</label>
            <input className="my-1" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
            <input className="my-1" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />           
            <button className="border-black btn fw-bold mt-3 btn-outline-secondary my-1 p-1" type="submit">Register</button>           
            {error && <div className="error text-danger">{error}</div>}         
          </form>
      </div>
      </>
  )
}

export default registerUser;


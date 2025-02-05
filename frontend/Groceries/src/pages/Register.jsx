import { useState, useEffect } from "react";
import useRegister from "../hooks/useRegister.jsx";
import validator from "validator";


const registerUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, error, isLoading } = useRegister();
  const [ formError, setFormError ] = useState("");
  
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    if (!email || !password) {
      setFormError("Please fill out all fields.");
      return;
    }

    if (!validator.isEmail(email)) {
      setFormError("Please use a valid email address.");
      return;
    }
    
    // Attempt to register user
    try {
      await register(email, password);
      setFormError(""); // Clear error only after a successful registration
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  // Automatically clear formError after 5 seconds
  useEffect(() => {
    if (formError) {
        setTimeout(() => {
        setFormError("");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Clear timer if component unmounts or error changes
    }
  }, [formError]);

  return (
      <>
        <div className="container-fluid" data-bs-theme="light">
          <form onSubmit={handleSubmit} className="form-vertical-center p-4 rounded background-gradient">
            <label className="pb-1 text-light fw-bold">Register</label>
            <input className="my-1" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
            <input className="my-1" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />           
            <button className="border-black btn fw-bold mt-3 btn-outline-secondary my-1 p-1" type="submit">Register</button>           
            {formError && <div className="error mt-2 opacity-80 bg-danger fw-bold text-white">{formError}</div>} 
            {error && <div className="error mt-2 opacity-80 bg-danger fw-bold text-white">{error}</div>}         
          </form>
      </div>
      </>
  )
}

export default registerUser;


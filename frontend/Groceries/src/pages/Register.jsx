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

    //clear previous form message
    setFormError("");
    
    //empty field check
    if (!email || !password) {
      // alert("Please fill out all fields.");
      setFormError("Please fill out all fields.");
      return;
    }

    if (!validator.isEmail(email)) {
        
      setFormError("Please use valid email address.");
      return;
    }

    try {
      //attempt to register user
      await register(email, password);
    } catch (error) {
      console.error("Error during registration:", error);
    }

  }

  // Automatically clear formError after 5 seconds
  useEffect(() => {
    if (formError) {
      const timer = setTimeout(() => {
        setFormError("");
      }, 3000); // 3 seconds

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


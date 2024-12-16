import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

 const useRegister = () => {
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const { dispatch } = useAuthContext();

    const register = async (email, password) => { 
            setIsLoading(true);
            setError(null); 

              const response = await fetch("http://localhost:4000/register", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ email, password }),  
            });
    
            const json = await response.json();

            if (!response.ok) {
              setError(json.error); // Set error from JSON
              setIsLoading(false);
              dispatch({ type: "LOGOUT" });

            } 
            if (response.ok) {
              //save user to local storage
              localStorage.setItem("user", JSON.stringify(json));
              //update auth context
              dispatch({ type: "LOGIN", payload: json });
            }
          }

          return { register, isLoading, error };
}

export default useRegister;




import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

 const useRegister = () => {
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const { dispatch } = useAuthContext();

    const register = async (email, password) => {
          setIsLoading(true);
          setError(null); 

        try {
            const response = await fetch("http://localhost:4000/register", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email, password }),  
              });
      
              const json = await response.json();
              console.log("Parsed JSON", json);

              if (!response.ok) {
                setError(json.error || "Registration failed"); // Set error from JSON or a default message
              } else {
                //issue is the dispatch below - figure out how to fix this
                dispatch({ type: "LOGIN", payload: json });
                setIsLoading(false);
              }
    
            } catch (err) {
              setError("An error occurred.");
            } finally {
              setIsLoading(false);
            }
    }

    return { register, isLoading, error };
}

export default useRegister;




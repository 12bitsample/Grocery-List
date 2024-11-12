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
                dispatch({ type: "LOGIN", payload: json });
                setIsLoading(false);
              }
    
            } catch (error) {
              //continue code here
              setIsLoading(false);
            setError(error.message);
        }
    }

    return { register, isLoading, error };
}

export default useRegister;




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

              //troubleshooting - remove later
              console.log("Response: ", response )
      
              const json = await response.json();
              console.log("Parsed JSON", json);
      
              if (!response.ok) {
                //troubleshooting - remove later
                console.log("Response error text: ", errorText);

                setError(json.error || `Error: ${response.status} - ${response.statusText}`);
                setIsLoading(false);
                return;
              }
      
              dispatch({ type: "LOGIN", payload: json });
              setIsLoading(false);
            } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }

    return { register, isLoading, error };
}

export default useRegister;




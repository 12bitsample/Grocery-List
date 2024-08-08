import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

 const useRegister = () => {
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(null);
    const { dispatch } = useAuthContext();

    const register = async (email, password) => {
        console.log('useRegister hook reached!')
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email, password }),  
              });
      
              const json = await response.json();
      
              if (!response.ok) {
                  setIsLoading(false);
                  setError(json.error);
                  return;
              }
      
              dispatch({ type: 'LOGIN', payload:json });
              setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }

    return { register, isLoading, error };
}

export default useRegister;




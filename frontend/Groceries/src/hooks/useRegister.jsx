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

              //troubleshooting - remove later
              console.log('Response: ', response )
      
              const json = await response.json();
      
              if (!response.ok) {
                //   setIsLoading(false);
                //   setError(json.error);
                //   return;

                //troubleshooting - remove later
                const errorText = await response.text();
                console.log('Response error text:', errorText);
                setError(`Error: ${response.status} - ${response.statusText}`);
                setIsLoading(false);
                return;
              }

              //troubleshooting -remove later
              const jsonResponseBody = JSON.parse(responseBody);
              console.log('Parsed JSON:', jsonResponseBody);
      
              dispatch({ type: 'LOGIN', payload: json });
              setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }

    return { register, isLoading, error };
}

export default useRegister;




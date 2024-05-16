import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(null);
    
}
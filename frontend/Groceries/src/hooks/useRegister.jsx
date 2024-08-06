//not sure this is needed for thgis apps purposes

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(null);
    const { dispatch } = useAuthContext();

    const register = async (email, password) => {
        console.log('useRegister hook reached!')
        setIsLoading(true);
        setError(null);

        const response = await fetch('api/user/register');
    }

    return register;
}


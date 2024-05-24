//not sure this is needed for thgis apps purposes

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(null);

    const register = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('')
    }


}

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, isLoading] = useState(null);
    const { dispatch } = useAuthContext();
    

}
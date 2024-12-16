import { createContext, useReducer, useEffect} from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT": 
            console.log("LOGOUT dispatched");
            localStorage.removeItem("user"); //clear local storage on logout
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
   
    const [state, dispatch] = useReducer(authReducer, {
        user: JSON.parse(localStorage.getItem("user")) || null,
    });
    
    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            dispatch({ type: "LOGIN", payload: user });
        }
    }, []);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}
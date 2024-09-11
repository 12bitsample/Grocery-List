import { createContext, useReducer } from "react";

export const GroceriesContext = createContext();

const initialState = {
    groceries: [],
}

export const groceryReducer = (state, action) => {

    

    switch (action.type) {
        case "SET_GROCERIES":
            return {
                groceries: action.payload
            }
            case "ADD_GROCERY":
                return {
                    groceries: [action.payload, ...state.groceries]
                }
            case "DELETE_GROCERY":
                return {
                    groceries: state.groceries.filter(g => g._id !== action.payload)
                }
            default:
                return state;
    }
}

export const GroceryContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(groceryReducer, initialState);

    return (
        <GroceriesContext.Provider value={{...state, dispatch}}>
            { children }
        </GroceriesContext.Provider>
    )
}
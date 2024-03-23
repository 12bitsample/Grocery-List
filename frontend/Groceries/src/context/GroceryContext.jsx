import { createContext, useReducer } from "react";

export const GroceriesContext = createContext();

export const groceryReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GROCERIES':
            return {
                groceries: action.payload
            }
            case 'ADD_GROCERY':
                return {
                    groceries: [action.payload, ...state.groceries]
                }
            default:
                return state;
    }
}

export const GroceryContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(groceryReducer, {
        groceries: null,
        
    });

    dispatch()

    return (
        <GroceriesContext.Provider value={{...state, dispatch}}>
            { children }
        </GroceriesContext.Provider>
    )
}
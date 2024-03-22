import { GroceriesContext } from "../context/GroceryContext";
import { useContext } from "react";

export const useGroceryContext = () => {
    const context = useContext(GroceriesContext);

    if (!context) {
        throw Error("useGroceryContext must be used inside a GroceryContextProvider.");
    }

    return context;
}
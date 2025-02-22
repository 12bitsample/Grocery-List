import { useState } from "react"
import { GroceriesContext } from "../context/GroceryContext";
import { addGroceryItem } from "../../../../backend/controllers/groceryController";
import { useContext } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const GroceryForm = () => {
    
    const [ item, setItem ] = useState("");
    const [ amount, setAmount ] = useState("");
    const [ error, setError ] = useState(null);
    const { dispatch } = useContext(GroceriesContext);
    const { user } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError("You must be logged in.");
            return;
        }

        if (!item || !amount) {
            return setError("Please fill out all fields.");
        }
      
        if (!amount) {
            return setError("You must enter an amount value for the item.");
        }
      
        // Check that the item is not a number:
        if (!isNaN(item)) {
        return setError("Item cannot be a number value.");
        }

        const groceries = { item, amount };

        const response = await fetch("http://localhost:4000/api/groceries/", {
            method: "POST",
            body: JSON.stringify(groceries),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
        });
        
        const json = await response.json();

        if(!response.ok) {
            const json = await response.json();
            setError(json.error);
        }
        if(response.ok) {
            if (!groceries.amount) {
               return setError("You must enter an amount value for item.");
            } 
            if (!isNaN(groceries.item)) {
                return setError("Item can not be a number value.");
            }
            
            setItem("");
            setAmount("");
            setError(null);

            console.log("Groceries added: ", json);
            dispatch({type: "ADD_GROCERY", payload: json});
        }
    }

        return (
            <>
                <div className="card border mb-3">
                    <form onSubmit={handleSubmit} className=" d-flex flex-column align-items-center flex-wrap create m-4 pb-4" >
                        <legend className="fw-bold text-black"><h3>Add Groceries?</h3></legend>
                        <div className="row justify-content-center w-50 pb-4 ">
                            
                            <label className="col-form-label mt-3 mb-2 form-control fw-bold text-black" htmlFor="item">Grocery Item</label>
                            <input 
                                type="text" 
                                name="item" 
                                placeholder="Add grocery item here..."
                                id="item"
                                value={item}
                                onChange={(e) => setItem(e.target.value)} 
                            />

                            <label className="col-form-label mt-3 mb-2 form-control fw-bold text-black" htmlFor="amount" value={amount}>Amount</label>
                            <input 
                                type="number" 
                                name="amount" 
                                placeholder="Amount here..." 
                                value={amount}
                                id="amount"
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit"  className="text-white fw-bold btn-outline-secondary shadow border-dark btn btn-success w-50 p-1">Add Grocery Item</button>
                        {error && <div className="error text-danger">{error}</div>}
                    </form>
                </div>
            </>
        )
    }
    export default GroceryForm;
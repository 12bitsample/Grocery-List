import { useState } from "react"
import { addGroceryItem } from "../../../../backend/controllers/groceryController";


const GroceryForm = () => {
    // const dispatch = useState();
    const [ item, setItem ] = useState('');
    const [ amount, setAmount ] = useState('');

    const [ error, setError ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // let {item, amount} = null;

        const groceries = { item, amount };

        console.log(item, amount);
        
        const response = await fetch('http://localhost:4000/api/groceries/', {
            method: "POST",
            body: JSON.stringify(groceries),
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }
        if(response.ok) {
            setItem('');
            setAmount('');
            setError(null);
            console.log('Groceries added: ', json);
        }
    }

        return (
            <>
            
            <div className="card border-success mb-3">
                <form onSubmit={handleSubmit} className=" d-flex flex-column align-items-center flex-wrap create py-4" >
                    <legend className="fw-bold">Add Groceries</legend>
                    <div className="row justify-content-center w-50 pb-4 ">
                        
                        <label className="col-form-label mt-4 form-control fw-bold" htmlFor="item" >Grocery Item</label>
                        <input 
                            type="text" 
                            name="item" 
                            placeholder="Add grocery item here..."
                            id="item"
                            value={item}
                            onChange={(e) => setItem(e.target.value)} 
                        />

                        <label className="col-form-label mt-4 form-control fw-bold" htmlFor="amount" value={amount}>Amount</label>
                        <input 
                            type="number" 
                            name="amount" 
                            placeholder="Amount here..." 
                            id="amount"
                            onChange={(e) => setAmount(e.target.value)}
                        />

                    </div>
                    
                    <button type="submit"  className="btn btn-success w-50">Add Grocery Item</button>
                    {error && <div className="error">{error}</div>}
                </form>

            </div>
            
            </>
        )
    }
    export default GroceryForm;
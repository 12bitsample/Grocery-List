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
                <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center flex-wrap create  py-4" >
                    <legend>Add Groceries</legend>
                    <div className="row justify-content-center w-50 pb-4">
                        
                        {/* <label>Grocery Item</label>
                        <input type='text' onChange={(e) => setItem(e.target.value)} value={item}/>
                        
                        <label >Amount</label>
                        <input type='number' onChange={(e) => setAmount(e.target.value)} value={amount}/> */}

                        
                        <label className="col-form-label mt-4 form-control" onChange={(e) => setItem(e.target.value)} value={item} htmlFor="inputDefault">Grocery Item</label>
                        <input type="text"  placeholder="Add grocery item here..." id="inputDefault"/>

                        <label className="col-form-label mt-4 form-control" onChange={(e) => setAmount(e.target.value)} value={amount} htmlFor="inputDefault">Amount</label>
                        <input type="number" placeholder="Amount here..." id="inputDefault"/>

                    </div>
                    
                    <button type="submit"  className="btn btn-success w-50">Add Grocery Item</button>
                    {error && <div className="error">{error}</div>}
                </form>

            </div>
            
            </>
        )
    }
    export default GroceryForm;
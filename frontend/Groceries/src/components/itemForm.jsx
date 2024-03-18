import { useState } from "react"


const ItemForm = () => {
    // const dispatch = useState();
    const [ item, setItem ] = useState('');
    const [ amount, setAmount ] = useState('');


        return (
            <>
            
            <div className="card border-success mb-3">
                <form className="create d-flex row justify-content-center py-4">
                    <legend>Add Groceries</legend>
                    <div className="row justify-content-center w-50">
                        <label>Grocery Item</label>
                        <input type='text' onChange={(e) => setItem(e.target.value)} value={item}/>
                        <label>Amount</label>
                        <input type='number' onChange={(e) => setAmount(e.target.value)} value={amount}/>
                    </div>
                    

                </form>

            </div>
            
            </>
        )
    }
    export default ItemForm;
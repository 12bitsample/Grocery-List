import { useEffect, useState } from 'react';
import GroceryForm from '../components/GroceryForm.jsx';

const List = () => {

    const [groceries, setGroceries] = useState([]);

    useEffect(() => {
        const fetchGroceries = async () => {
            const response = await fetch('http://localhost:4000/api/groceries/');
            const json = await response.json();

            if(response.ok) {
                setGroceries(json);
            }
        }
        fetchGroceries();
    }, []);

    const handleDeleteClick = async (grocery) => {
        const response = await fetch('http://localhost:4000/api/groceries/' + grocery._id, {
            method: "DELETE",

        });

        const json = await response.json();
    }

    return (
        <>
            <div className="container-fluid d-flex row">
                <div className="row justify-content-center align-items-center h-100 w-75">

                    <div className="card border-success mb-3">
                        <div className="card-header py-3"><h3>Grocery List</h3></div>
                        <div className="card-body w-100 py-5  h-75 d-flex row mx-auto justify-content-center">
                            
                            <table className="table table-hover w-75">
                                <thead>
                                    <tr>
                                        <th scope='col'>Amount</th>
                                        <th scope='col'>Item</th>
                                        <th scope='col'>Remove Item</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {groceries.map((grocery, index) => (
                                        <tr key={grocery._id} className={index % 2 === 0 ? 'table-success' : ''}>
                                            <td>{grocery.amount}</td>
                                            <td>{grocery.item}</td>
                                            <td>
                                                <button type="button" className="btn btn-success" onClick={() => handleDeleteClick(grocery)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <GroceryForm />
                </div>
            </div>
          
        </>
    )
}

export default List;
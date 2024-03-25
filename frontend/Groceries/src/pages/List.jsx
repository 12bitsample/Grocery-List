import { useEffect, useState } from 'react';
import GroceryForm  from '../components/GroceryForm.jsx';
import { useGroceryContext } from '../hooks/useGroceryContext.jsx';

const List = () => {

    // const [groceries, setGroceries] = useState([]);

    const { groceries, dispatch } = useGroceryContext();

    

    useEffect(() => {
        const fetchGroceries = async () => {
            const response = await fetch('http://localhost:4000/api/groceries/');
            const json = await response.json();
            console.log(json);

            if(response.ok) {
                // setGroceries(json);
                
                dispatch({type: 'SET_GROCERIES', payload: json});
            }
        }
        fetchGroceries();
    }, [dispatch]);

    const handleDeleteClick = async (grocery) => {
        try {
            const response = await fetch('http://localhost:4000/api/groceries/' + grocery._id, {
            method: "DELETE",

            });

            if (!response.ok) {
                throw new Error('Failed to delete item!');
            }

            dispatch({ type: 'DELETE_GROCERY', payload: grocery._id });
            // handleDeleteClick();

        } catch (error) {
            console.error('Error deleting item:', error);
        }

        // const json = await response.json();

        // if(response.ok) {
        //     dispatch({ type: 'DELETE_GROCERY', payload: grocery._id });
        // }

    }

    return (
        <>
            <div className="container-fluid d-flex row">
                <div className="row justify-content-center align-items-center h-100 w-75">

                    <div className="card border-success mb-3">
                        <div className="card-header py-3"><h3>Grocery List</h3></div>
                        <div className="card-body w-100 p-3  h-75 d-flex row mx-auto justify-content-center">
                            
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
import { useEffect, useState } from "react";
import GroceryForm  from "../components/GroceryForm.jsx";
import { useGroceryContext } from "../hooks/useGroceryContext.jsx";
import { useAuthContext } from "../hooks/useAuthContext.jsx";

const List = () => {

    const { groceries, dispatch } = useGroceryContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchGroceries = async () => {

            try {
                const response = await fetch("http://localhost:4000/api/groceries/", {
                    method: "GET",
                    headers: {
                                // "Content-Type": "application/json",
                                "Authorization": `Bearer ${user.token}`,
                            },
                    credentials: "include", // Include credentials in the request
                })

                const json = await response.json();
    
                if(!response.ok) {
                    console.error("Network response was not ok: ", response.statusText);
                    throw new Error("Network response was not ok");
                }
    
                if(response.ok) {
                    dispatch({type: "SET_GROCERIES", payload: json});
                }
                
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        if (user) {
            fetchGroceries();
        } else {
            // Clear the groceries in the state when the user logs out
            dispatch({ type: 'SET_GROCERIES', payload: [] });
        }
    }, [dispatch, user]);

    const handleDeleteClick = async (grocery) => {
        try {
            const response = await fetch("http://localhost:4000/api/groceries/" + grocery._id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }});

            if (!response.ok) {
                throw new Error("Failed to delete item!");
            }

            await dispatch({ type: "DELETE_GROCERY", payload: grocery._id });
          
        } catch (error) {
            console.error("Error deleting item: ", error);
        }
    }
    
    return (
        <>
            <div className="container-fluid d-flex row">
                <div className="row justify-content-center pt-3 align-items-center w-75">

                    <div className="card border mb-3">
                        <div className="card-header py-3 text-black"><h3>Grocery List </h3></div>
                        <div className="card-body w-100  py-5  h-75 d-flex row mx-auto justify-content-center">
                            
                            <table className="table table-hover w-75">
                                <thead className="border">
                                    <tr>
                                        <th scope="col" className="py-3">Amount</th>
                                        <th scope="col" className="py-3">Item</th>
                                        <th scope="col" className="py-3">Remove Item</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {groceries.map((grocery, index) => (
                                        <tr key={grocery._id} className={index % 2 === 0 ? "table-success" : ''} >
                                            <td className="py-2">{grocery.amount}</td>
                                            <td className="py-2">{grocery.item}</td>
                                            <td className="py-2">
                                                <button type="button" className="btn btn-success p-1" onClick={() => handleDeleteClick(grocery)}>
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
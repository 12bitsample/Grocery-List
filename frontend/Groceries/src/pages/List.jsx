import { useEffect, useState } from 'react';

export default function List() {

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

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center h-100 w-75">

                <div className="card border-success mb-3">
                    <div className="card-header">Grocery List</div>
                    <div className="card-body w-100 d-flex mx-auto justify-content-center">
                        
                    <ul className="list-group w-75">
                        {groceries.map((grocery, index) => (
                            <li key={grocery._id} className={`list-group-item d-flex justify-content-between align-items-center ${index % 2 === 0 ? 'list-group-item-success' : ''}`}>

                                <span className="grocery">{grocery.item}</span>
                                <span className="badge bg-primary rounded-pill"><button type="button" class="btn btn-success">Delete</button></span>
                            </li>
                        ))}
                    </ul>


                    </div>
                </div>

                    {/* <ul className="list-group w-75">
                        {groceries.map((grocery, index) => (
                            <li key={grocery._id} className={`list-group-item d-flex justify-content-between align-items-center ${index % 2 === 0 ? 'list-group-item-success' : ''}`}>

                                <span className="grocery">{grocery.item}</span>
                                <span className="badge bg-primary rounded-pill"></span>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>

        </>
    )
}
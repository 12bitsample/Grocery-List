import { useEffect, useState } from 'react';

export default function List() {

    const [groceries, setGroceries] = useState();

    useEffect(() => {
        const fetchGroceries = async () => {
            const response = await fetch('http://localhost:4000/api/groceries/');
            const json = await response.json();

            if(response.ok) {

            }
        }
        fetchGroceries();
    }, []);

    return (
        <>
        
        {/* <div className="conatiner-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">

                <ul className="list-group w-75">
                <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge bg-primary rounded-pill">2</span>
                </li>
                <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge bg-primary rounded-pill">1</span>
                </li><li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge bg-primary rounded-pill">5</span>
                </li>
                <li className="list-group-item list-group-item-warning d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge bg-primary rounded-pill">4</span>
                </li>
                <li className="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge bg-primary rounded-pill">9</span>
                </li>
                <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge bg-primary rounded-pill">8</span>
                </li>
                <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge bg-primary rounded-pill">0</span>
                </li>
                </ul>
            
            </div>
        </div> */}

        </>
    )
}
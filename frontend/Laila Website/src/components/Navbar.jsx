import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        // <nav className='position-initial w-100 bg-success'>
        //     <Link to="/">Home</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/register">Register</Link>
            
        // </nav>

        <nav className='navbar navbar-expand-md bg-success' data-bs-theme='dark'>
            <div className='d-flex justify-content-between w-100 py-3'>
                <div>
                    <Link className='px-2 fw-bolder'>Laila's Site</Link>
                </div>
                
                <div>
                    <Link className='px-1' to="/">Home</Link>
                    <Link className='px-1' to="/login">Login</Link>
                    <Link className='px-1' to="/register">Register</Link>
                </div>
                
            </div>

        </nav>
    )
}

export default Navbar
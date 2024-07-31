import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';


const Navbar = () => {

    const { logout } = useLogout();

    const handleClick = () => {
        logout();
    }

    return (

        <nav className='navbar-nav navbar-expand-xxl background-gradient' data-bs-theme='dark'>
            <div className='d-flex justify-content-between w-100 py-3'>
                <div>
                    <Link className='px-2 fw-bolder link-light text-decoration-none' to='/'>Grocery List Deluxe</Link>
                </div>
                
                <div className='px-2'>
                    <div className='container '>
                        <div className="column">
                            <Link className='px-1 fw-bold link-light text-decoration-none' to="/">Home</Link>
                            <Link className='px-1 fw-bold link-light text-decoration-none' to="/register">Register</Link>
                            <Link className='px-1 fw-bold link-light text-decoration-none' to="/login">Login</Link>
                            <Link className='px-1 fw-bold link-light text-decoration-none' to="/list">List</Link>
                        </div>
                        <div className="column pt-2 d-flex justify-content-end">
                            <button onClick={handleClick} type="button" className="btn fw-bold p-1 btn-outline-secondary">Logout</button>
                        </div>

                    </div>
                </div>
                
            </div>

        </nav>
    )
}

export default Navbar;
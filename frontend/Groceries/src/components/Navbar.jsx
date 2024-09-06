import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {

    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
    }

    return (

        <nav className="navbar-nav navbar-expand-xxl background-gradient" data-bs-theme="dark">
            <div className="d-flex justify-content-between w-100 py-3">
                <div>
                    <Link className="px-2 fw-bolder link-light text-decoration-none" to='/'>Grocery List Deluxe</Link>
                </div>
                <div className="d-flex px-1">
                    <div className="row d-flex">
                        <div className="d-flex flex-column align-items-end">

                            <span>
                                <div className="column d-flex align-items-end">
                                    <Link className="px-1 fw-bold link-light text-decoration-none" to="/">Home</Link>
                                    <Link className="px-1 fw-bold link-light text-decoration-none" to="/register">Register</Link>
                                    <Link className="px-1 fw-bold link-light text-decoration-none" to="/login">Login</Link>
                                    <Link className="px-1 fw-bold link-light text-decoration-none" to="/list">List</Link>
                                </div>
                            </span>

                                    {user ? (<p className="col text-light text-nowrap align-middle">Welcome, {user.email}</p>) : (<Link className='px-1 fw-lighter link-light text-decoration-none' to="/login">Please log in!</Link>)
                                    }
                                    {user ? (<div className="col py-1 d-flex justify-content-end align-middle">
                                        <button onClick={handleClick} type="button" className="btn fw-bold p-1 btn-outline-secondary">Logout?</button>
                                        </div>) : (<p></p>)
                                    }  
                                 </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
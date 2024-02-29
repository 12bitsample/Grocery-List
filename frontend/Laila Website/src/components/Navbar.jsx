import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        // <nav className='position-initial w-100 bg-success'>
        //     <Link to="/">Home</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/register">Register</Link>
            
        // </nav>

        <nav className='navbar navbar-expand-sm bg-success' data-bs-theme='dark'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        </nav>
    )
}

export default Navbar
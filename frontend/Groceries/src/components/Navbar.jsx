import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        // <nav className='position-initial w-100 bg-success'>
        //     <Link to="/">Home</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/register">Register</Link>
            
        // </nav>

        <nav className='navbar-nav navbar-expand-xxl bg-success' data-bs-theme='dark'>
            <div className='d-flex justify-content-between w-100 py-3'>
                <div>
                    <Link className='px-2 fw-bolder link-light text-decoration-none'>Grocery List Deluxe</Link>
                </div>
                
                <div className='px-2'>
                    <Link className='px-1 text-decoration-none' to="/">Home</Link>
                    <Link className='px-1 text-decoration-none' to="/login">Login</Link>
                    {/* <Link className='px-1 text-decoration-none' to="/register">Register</Link> */}
                </div>
                
            </div>

        </nav>
    )
}

export default Navbar
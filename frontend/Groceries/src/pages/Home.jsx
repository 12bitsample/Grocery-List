import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Home() {

  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  }
  return (
    <>
      <div className="container-fluid">
        {
          user ? (
            <div className="card border-secondary p-4 w-50">
              <h4 className="card-title mx-2">Why did you come back here?</h4>
              <div className="card-body p-2">
                <p className="card-text">So, slow your roll buckaroo. You're gonna need to log out to prove that you are one  of the aforementioned dohgies/ladies</p>
              </div>
              <button type='button' className='btn btn-success w-25 align-self-center'><Link className='px-1 link-light
              text-decoration-none' onClick={handleClick}>Logout?</Link></button>
            </div> ) : (
              <div className="card border-secondary p-4 w-50">
              <h4 className="card-title mx-2">Welcome to Jilleen & Mahculls Grocery List!</h4>
              <div className="card-body p-2">
                <p className="card-text">So, slow your roll buckaroo. You're gonna need to log out to prove that you are one  of the aforementioned dohgies/ladies</p>
              </div>
              <button type='button' className='btn btn-success w-25 align-self-center'><Link className='px-1 link-light
              text-decoration-none' to="/login">Login</Link></button>
            </div>
          )
        }
      </div>
    </>
  )
}
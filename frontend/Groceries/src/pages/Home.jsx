import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='container-fluid'>

        <div className="card border-secondary p-4 w-50" >
          <h4 className="card-title mx-2">Welcome to Jilleen & Mahculls Grocery List!</h4>
          <div className="card-body p-2">
          <div className="card-header p-3">But only if you are either Kubrick, Maizy or Jilleen.</div>
            <p className="card-text">So, slow your roll buckaroo. You're gonna need to login to prove that you are one
            of the aforementioned dohgies/ladies</p>
          </div>
          <Link className='px-1 link-dark text-decoration-none' to="/login">Login</Link>
        </div>

      </div>
    </>
    
  )
}
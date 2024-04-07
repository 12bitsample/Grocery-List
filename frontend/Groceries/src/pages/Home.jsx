import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='container-fluid dohgie-bg'>

        <div className="card border-secondary p-4 w-50" >
          <h4 className="card-title mx-2">Welcome to Jilleen & Mahculls Grocery List!</h4>
          <div className="card-body p-2">
          <div className="card-header text-danger p-3">But only if you are either Kubrick, Maizy or Jilleen.</div>
            <p className="card-text">So, slow your roll buckaroo. You're gonna need to login to prove that you are one
            of the aforementioned dohgies/ladies</p>
          </div>
          <button type='button' className='btn btn-success w-25 align-self-center'><Link className='px-1 link-light text-decoration-none' to="/login">Login</Link></button>
        </div>

      </div>
    </>
    
  )
}
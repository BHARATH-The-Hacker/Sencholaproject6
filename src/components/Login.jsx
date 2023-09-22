import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
function Login() {
  return (
    <div>
         <Header/>  
  {/* LOGIN PAGE */}
    <div className='login template container-fluid d-flex justify-content-center align-items-center w-100 vh-100 bg-info'>
       <div className="p-5 container rounded bg-white"> 
            <form action="#" className='was-validated container-fluid-sm' method="post">
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control rounded-3 my-2" placeholder='Enter Email' id="" required />
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control rounded-3 my-2" placeholder='Enter Password' id="" required />
            </div>
            <div className='mb-2'>
                <input type="checkbox" className="custom-control custom-checkbox" id="check" required />
                <label htmlFor="check" className='custom-input-label ms-2'>Remember Me</label>
                <div class="valid-feedback text-success">You Got It !!!</div>
                <div class="invalid-feedback text-danger">Check this checkbox to continue.</div>
            </div>
            <div className="d-grid">
                <button className='btn btn-primary my-2'>Sign in</button>
            </div>
            <p className='text-end mt-2'>
                <a href="#">ForgotPassword?</a><Link to="/signup" className='ms-2'>Sign-up</Link>
            </p>
            </form>
        </div> 
    </div>
    </div>
  )
}

export default Login
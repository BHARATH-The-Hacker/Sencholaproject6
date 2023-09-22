import React from 'react';
import { Link } from 'react-router-dom'


 function Signup() {
  return (
<div>
       
    {/* SIGNUP PAGE */}
    <div className='signup container-fluid template d-flex justify-content-center align-items-center vh-100 bg-info'>
       <div className="container mt-5 p-5 rounded bg-white"> 
            <form action="#" className='was-validated container-fluid-sm' method="post">
            <h3 className='text-center'>Sign Up</h3>
            <div className='mb-2'>
                <label htmlFor="fname">First Name</label>
                <input type="text" className="form-control rounded-3 my-2" placeholder='Enter First Name' id="" required />
            </div>
            <div className='mb-2'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" className="form-control rounded-3 my-2" placeholder='Enter Last Name' id="" required />
            </div>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control rounded-3 my-2" placeholder='Enter Email' id="" required />
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control rounded-3 my-2" placeholder='Enter Password' id="" required />
            </div>
            
            <div className="d-grid">
                <button className='btn btn-primary my-2'>Create Account</button>
            </div>
            <p className='text-end mt-2'>
                Already Registerd<Link to="/Login" className='ms-2'>Sign-in</Link>
            </p>
            </form>
        </div> 
    </div>
</div>
         )
}
export default Signup;
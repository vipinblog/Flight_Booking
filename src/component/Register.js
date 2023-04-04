import React from 'react';
 import "./Register.css";
import { Form } from 'react-router-dom';
const Register =()=>{
    return(
        <form action="action-page">
            <div class="container">
                <h3>Sign Up</h3>
           <br/>
          <div className='firstName'>
            <label/>
            <input type='text' placeholder='First Name'/>
            <br/>
          </div>
          <div className='LastName'>
          <label/>
          <input type='text' placeholder='Last Name'/>
          </div>
          <br/>
          
          <div className='email'>
            <label/>
            <input type='email' placeholder='Email'/>
          </div>
          <br/>
          <div className='password'>
            <label/>
            <input type='Password' placeholder='Password'/>
           </div>
           <br/>
           <div className='confirmPasword'>
            <label/>
            <input type='Password' placeholder='Confirm Password'/>
           </div>
           <br/>
           <div className='checkbox'>
           <input type='Checkbox' value="boat"/> 
           <label>I accept the terms of Use & Privacy Policy</label>
           <br/>
           <div className='sign'>
           <input type='Submit' placeholder='Submit'/>
           
           </div>
           </div>
           </div>
        </form>
      
      
    
    )
}
export default Register;
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
            <input type='text' placeholder='Email'/>
          </div>
          <br/>
          <div className='password'>
            <label/>
            <input type='Password' placeholder='Password'/>
           </div>
           <br/>
           <div className='confiurmPasword'>
            <label/>
            <input type='Password' placeholder='Confirm Password'/>
           </div>
           </div>
        </form>
      
      
    
    )
}
export default Register;
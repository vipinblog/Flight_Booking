import React from 'react';
import "./Login2.css";
const login=()=>{
     return(
        <form action='action-page'>
         <div className='Container'>
         <h3 id='Header'>Log in</h3>
        <div className='Login-page'>
        
        <div className='username'>
        <label for='Uname'/>
        <input  type = "text" name='Uname' id='Uname' placeholder ='User-Name'/>
        </div>
        <br/>
        <div>
        <label for='Pname'/>
        <input type="password" placeholder ='Password' name='Pname' id ='Pname'/>
        </div>
         <br/>
        </div>
         <div>
        <label/>
        <input type="Submit" id='Lname' placeholder='Submit'/>
        </div>
         </div>
        </form>
       
     )
}
export default login;
import React from 'react';
import "./Navbar.css";
 import {Link} from "react-router-dom";
 
 
function Navbar(){
    

    return(
    <nav className='main'>
    
        <div className='menu-link'>
        <ul>
        
            <li>
                
                <Link to ='/Login'>Login</Link>
                

            </li>
            <li>
                
                <Link to = '/Register'>Register</Link>
            </li>
            <li>
                
                <Link to = '/Book Now'>Book Now</Link>
            </li>
            <li>
                
                <Link to = '/Search Flight'>Search Flight</Link>
            </li>
         </ul>
         
        </div>
         
        <div className='text'>
            <h1>The easy way to find 
             cheap  airline tickets.</h1>
            <p className='home-text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
             </p>
        </div>
        
        <div className='btn'><button>Book Now</button></div>
        </nav>
    
    
    )
}
export default Navbar;
import React from 'react';
import "./Header.css";

function Header2(){
    return(
    <nav className='main'>
    
        <div className='menu-link'>
        <ul>
            <li>
                <a href='./Login'>Login</a>
            </li>
            <li>
                <a href='#'>Register</a>
            </li>
            <li>
                <a href='#'>Book Now</a>
            </li>
            <li>
                <a href='#'>Search Flight</a>
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






export default Header2;
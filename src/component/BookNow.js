import React from "react"
import "./BookNow.css";
import { Form } from "react-router-dom";

const BookNow =()=>{

    return (
      
        <form action ="action-page">
          
          <div className="Container">
       <div className="box3">
    <p id="round">Round Trip</p>
    <p id="way">One Way</p>
    <p id="multi">Multi City</p>
    </div>
    <br/>
       <div className="box">     
          <div className="from">
         
          <label/>
          <p>From</p>
          <input type= "From" placeholder="Type Departure City"/>
          </div>
          
          <div className="to">
          <label/>
          <p>To</p>
          <input type = "To" placeholder="Type Destination City"/> 
          </div>
         <br/>
          <div className="depart">
          <p>Depart</p>
          <label/>
          <input type="Date"  placeholder="Depart"/>
          </div>
          
          <div className="return">
          <p>Return</p>
          <label/>
          <input type ="Date" placeholder="Return"/>
          </div>
            
          <div className="economy">
          <p>Economy</p>
          <label/>
          <input type = "text" placeholder="Economy"/>
          </div>
          <br/>
          <div className="adult">
        <p>Adult</p>
            <label/>
        <input type = "number" placeholder="Adult"/>  
        </div>
        <div className="child">
        <p>Child</p>
        <label/>
        <input type="number" placeholder ="Child"/>
        </div>
        <div className="searchflight">
        <label/>
        <input type = "search" placeholder="Search-Flight"/>
        </div>

        </div>
        </div>
        </form>
        
    )
    
}
export default BookNow;
import React from "react";
import "./BookNow.css";
import { Form } from "react-router-dom";
const BookNow =()=>{
    return (
        
        <form action ="action-page">
          <div className="Container">
          <h3>BookNow</h3>
          <div className="Book-page">
          <br/>
          <div>
          <label/>
          <input type= "radio" placeholder="Myradio"/>
          </div>
          <br/>
          <div>
          <label/>
          <input type = "radio" placeholder="One Way"/> 
          </div>
          <br/>
          <div>
          <label/>
          <input type="text" placeholder="From"/>
          </div>
          <br/>
          <div>
          <label/>
          <input type ="text" placeholder="To"/>
          </div>
          <br/>
          <fieldset>
         <legend disabled>DEPART DATE</legend>
          <div>
          <label/>
          <input type = "date" placeholder="Depart-Date"/>
          </div>
          </fieldset>
           <br/>
          <fieldset>
          <legend>Add Return DATE</legend>
          <div>
          <label/>
          <input type = "date" placeholder="Return-Date"/>
          </div>
          </fieldset>
          </div>
        </div>
        </form>
        
    )
    
}
export default BookNow;
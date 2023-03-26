import React from "react";
import img from "./image/plane.jpg";
import "./Header.css";
function frontPage(){
return (
<div className="plane">
<img src={img}  alt="airport-png"/>
</div>
        
)
}
export default frontPage;
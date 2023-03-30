import Navbar from "./Navbar";
import plane from "./image/plane.jpg";
// import react from 'react';
function Home(){
    return(
        <>
          <Navbar/>

     
     <div className="plane">
<img src={plane}  alt="airport-jpg"/>
</div>
   
  
  
  
        </>
    )
}
export default Home;
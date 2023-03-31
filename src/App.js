import { Routes,Route} from 'react-router-dom';
 import "./component/Login.css";
import "./component/Navbar.css";
import Login from './component/Login';
 import Register from './component/Register';
import BookNow from './component/BookNow';
 import SearchFlight from './component/SearchFlight';
 import Home from './component/Home';



function App(){
  return (
  <div>
    
   <Routes>
   <Route path = "/" element={<Home/>}/>  
    <Route path = "/Login" element={<Login/>}/> 
   <Route path = "/Register" element={<Register/>}/> 
   <Route path = "/Book Now" element={<BookNow/>}/>
   <Route path = "/SearchFlight" element={<SearchFlight/>}/> 
  
  
   </Routes>
   
  
   
   
    </div>
    
  );
}

export default App;

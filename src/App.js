import { Routes,Route,} from 'react-router-dom';
// import "./Header.css";
// import Front from './Front';
// import Header2 from './Header2';
// import "./Login2.css";
import Login from './component/Login';
import Register from './component/Register';
import BookNow from './component/BookNow';
import SearchFlight from './component/SearchFlight';
import Navbar from './component/Navbar';
//  import Register from './component/Register';
// import BookNow from './BookNow';
// import SearchFlight from './SearchFlight';

function App(){
  return (
  <div>
    <Navbar/>
   <Routes>
   
   <Route path = "/Login" element={<Login/>}/> 
   <Route path = "/Register" element={<Register/>}/>
   <Route path = "/BookNow" element={<BookNow/>}/>
   <Route path = "/SearchFlight" element={<SearchFlight/>}/>
  
  
   </Routes> 
  
  <Login/> 
  <Register/>
  <BookNow/>
  <SearchFlight/>
   
  {/* <Front/>  */}
    </div>
    
  );
}

export default App;

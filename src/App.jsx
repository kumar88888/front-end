
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateComponent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route>
      <Route element={<PrivateComponent />} />  
      <Route path="/" element={<SignUp/>}/>
      <Route path="/add" element={<AddProduct/>} />
      <Route path="/update/:id" element={<UpdateProduct/>} />
      <Route path="/logout" element={<h1>LOGOUT COMPONENET</h1>} />
      <Route path="/profile" element={<h1>PROFILE COMPONENET</h1>} />
      </Route>


      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
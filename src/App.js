import logo from './logo.svg';
import './App.css';
import {Homepage} from './components/homepage';
import { Aboutus } from './components/Aboutus';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes,Route}from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Products } from './components/Products';
import { AddProducts } from './components/AddProducts';
import { EditProducts } from './components/EditProducts';
function App() {
  return (
    <>
      <Router>
        <div>
          <div>
            <Navbar/>
          </div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Product/:page?' element={<Products />} />
            <Route path='/Aboutus' element={<Aboutus />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Addproducts' element={<AddProducts />} />
            <Route path='/EditProducts/:id' element={<EditProducts />} />
            <Route path='/Signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
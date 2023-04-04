import logo from './logo.svg';
import './App.css';
import "./Component/navbar.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Navbar} from './Component/navbar';
import Shop from './Pages/shop/shop';
import Cart from './Pages/cart/cart';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path = "/" element={<Shop/>}/>
          <Route path = "/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

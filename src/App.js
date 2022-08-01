
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import { Route, Switch} from 'react-router-dom'
import About from './components/About';
import Contacts from './components/Contacts'
import Login from './components/Login';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Register from './components/Register';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
      {/* <Routes> */}
        <Route exact path='/products' element={<Products/>}>
          <Products/>
        </Route>
        <Route exact path='/products/:id' element={<Product/>}><Product/></Route>
      <Route exact path='/' element={<Home/>} >
      <Home />
      </Route>
      <Route exact path = '/about' element={<About/>} ><About/></Route>
      <Route exact path = '/contacts' element={<Contacts/>} ><Contacts/></Route>
      <Route exact path = '/login' element={<Login/>} ><Login/></Route>
      <Route exact path = '/register' element={<Register/>} ><Register/></Route>
      <Route exact path = '/cart' element={<Cart/>} ><Cart/></Route>
      <Route exact path = '/checkout' element={<Checkout/>} ><Checkout/></Route>




      {/* </Routes> */}</Switch>
    </div>
  );
}

export default App;

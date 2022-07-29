
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import { Route, Switch} from 'react-router-dom'
import About from './components/About';
import Contacts from './components/Contacts'


function App() {
  return (
    <div className='App'>
      <Navbar/><Switch>
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

      {/* </Routes> */}</Switch>
    </div>
  );
}

export default App;

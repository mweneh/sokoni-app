import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/products" element={Products}>
          <Products />
        </Route>
        <Route exact path="/" element={Home}>
          <Home />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

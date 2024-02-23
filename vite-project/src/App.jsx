import React from "react";
import {
   BrowserRouter as Router,
    Route,
     Routes,
   } from "react-router-dom";

   import Home from "./pages/home/Home";
   import MyState from "./context/data/myState";
   import Cart from "./pages/Cart/Cart";
   import Dashboard from "./pages/admin/dashboard/Dashboard";
   import Login from './pages/registration/Login';
   import Signup from './pages/registration/Signup';
   import ProductInfo from './pages/productInfo/ProductInfo';
   import AddProduct from './pages/admin/page/AddProduct';
   import UpdateProduct from './pages/admin/page/UpdateProduct'; 
   import NoPage from "./pages/nopage/NoPage";

   


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/MyState" element={<MyState />} />
          <Route path="/dashboard" element={<dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<addproduct />} />
          <Route path="/updateproduct" element={<updateproduct />} />
          <Route path="/*" element={<NoPage />} />
          
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;

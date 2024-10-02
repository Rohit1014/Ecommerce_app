import React from "react";
import {Routes,Route} from 'react-router-dom'
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import {Contactus} from "./pages/Contactus"
import { Policy } from "./pages/Policy";
import { PageNotFound } from "./pages/PageNotFound";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login"
import Dashboard from "./pages/user/Dashboard";
import Private from "./components/routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import User from "./pages/admin/User";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}/> 

      <Route path="/Dashboard" element={<Private />}>
      <Route path="user" element={<Dashboard />}/> 
      <Route path="user/orders" element={<Orders />}/> 
      <Route path="user/profile" element={<Profile />}/> 



      </Route>

      <Route path="/Dashboard" element={<AdminRoute />}>
      <Route path="admin" element={<AdminDashboard />}/> 
      <Route path="admin/create-category" element={<CreateCategory />}/>
      <Route path="admin/create-product" element={<CreateProduct />}/>
      <Route path="admin/users" element={<User />}/>


      </Route>
      <Route path="/Register" element={<Register />}/> 
      <Route path="/forgot-password" element={<ForgotPassword />} />


      <Route path="/Login" element={<Login />}/> 
      <Route path="/about" element={<About />}/> 
      <Route path="/contact" element={<Contactus />}/> 
      <Route path="/policy" element={<Policy />}/> 
      <Route path="*" element={<PageNotFound />}/> 
    </Routes>
    
    </>
  );
}

export default App;

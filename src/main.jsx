import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './Context/Store.jsx';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import About from './components/About/About.jsx';
import './index.css';
import "./App.css"
import Products from './components/Products/Products.jsx';
import SignIn from "./components/Sign In/SignIn"
import Home from "./components/Home/Home.jsx"
import Layout from "./components/Outlet/Outlet.jsx"
import Cart from './components/Cart/Cart.jsx';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/EcommerceUsingContext/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='product' element={<Products />} />
      <Route path='SignIn' element={<SignIn />} />
      <Route path="cart" element={<Cart/>}/>
      <Route path="*" element={<div>NOt Available</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={route} />
    </AppProvider>
  </React.StrictMode>
);

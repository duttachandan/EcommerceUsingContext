import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Outlet/Layout.jsx';
import About from './components/About/About.jsx';
import App from './App.jsx';
import './index.css';
import { AppProvider } from './Context/Store.jsx';
import Products from './components/Products/Products.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<App />} />
            <Route path="about" element={<About />} />
            <Route path='product'element={<Products/>}/>
            <Route path="*" element={<div>NOt Available</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

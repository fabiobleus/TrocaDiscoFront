import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Logo from './componentes/logoBusca.jsx';
import Menu from './componentes/menu.jsx';
import Carousel from './componentes/carousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import Category from './pages/category.jsx';
import RegisterUser from './pages/registerUser.jsx';
import Product from './pages/product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/category/:id",
    element: <Category/>
  },
  {
    path: "/register-user",
    element: <RegisterUser/>
  },
  {
    path: "/product/:id",
    element: <Product/>
  }


])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import Category from './pages/category.jsx';
import RegisterUser from './pages/registerUser.jsx';
import Product from './pages/product.jsx';
import LoginUser from './pages/loginUser.jsx';
import ProfilePage from './pages/profilePage.jsx';

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
    path: "/login-user",
    element: <LoginUser/>
  },
  {
    path: "/product",
    element: <Product/>
  },
  {
    path: "/profile-page",
    element: <ProfilePage/>
  },


])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
)

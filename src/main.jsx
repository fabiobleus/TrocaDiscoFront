import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Logo from './componentes/logoBusca.jsx'
import Menu from './componentes/menu.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Logo/>
    <Menu/>
  </React.StrictMode>
)

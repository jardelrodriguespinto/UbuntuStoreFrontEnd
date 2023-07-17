import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/style/index.css';
import App from './components/telas/App';
import Estabelecimento from './components/telas/Estabelecimento';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/telas/login/Login';
import HomeEstabelecimento from './components/telas/home-estabelecimento/HomeEstabelecimento';
import MinhaLoja from './components/telas/minha-loja/MinhaLoja';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/estabelecimento',
    element: <Estabelecimento/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:'/estabelecimentos/home',
    element: <HomeEstabelecimento/>
  },
  {
    path:'/estabelecimentos/minhaloja',
    element: <MinhaLoja/>
  }
  
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

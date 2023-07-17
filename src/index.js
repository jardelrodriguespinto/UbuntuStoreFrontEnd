import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/style/index.css';
import App from './routes/App';
import Estabelecimento from './routes/Estabelecimento';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './routes/Login';
import HomeEstabelecimento from './routes/HomeEstabelecimento';


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
  }
  
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

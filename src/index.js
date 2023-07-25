import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/style/index.css';
import App from './components/telas/App';
import Estabelecimento from './components/telas//estabelecimento/Estabelecimento';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/telas/login/Login';
import HomeEstabelecimento from './components/telas/home-estabelecimento/HomeEstabelecimento';
import MinhaLoja from './components/telas/minha-loja/MinhaLoja';
import Cardapio from './components/telas/cardapio/Cardapio';
import ItemCardapio from './components/telas/cardapio/item-cardapio/ItemCardapio';
import EditarItemCardapio from './components/telas/cardapio/edicao-item-cardapio/EditarItemCardapio';
import Cadastro from './components/telas/login/formulario-cadastro/Cadastro.js';
import EsqueciminhaSenha from './components/telas/login/esqueci-minha-senha/EsqueciMinhaSenha';
import NossaMissao from './components/telas/nossa-missao/NossaMissao';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/estabelecimentos',
    element: <Estabelecimento/>
  },
  {
    path: '/nossa-missao',
    element: <NossaMissao/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:'/estabelecimentos/cadastro',
    element: <Cadastro/>
  },
  {
    path:'/estabelecimentos/esqueciasenha',
    element: <EsqueciminhaSenha/>
  },
  {
    path:'/estabelecimentos/inicio',
    element: <HomeEstabelecimento/>
  },
  {
    path:'/estabelecimentos/minhaloja',
    element: <MinhaLoja/>
  },
  {
    path:'/estabelecimentos/cardapio',
    element: <Cardapio/>
  },
  {
    path:'/estabelecimentos/cardapio/edicao',
    element: <EditarItemCardapio/>
  },
  {
    path:'/estabelecimentos/esqueciasenha',
    element: <EsqueciminhaSenha/>
  },
  {
    path:'/estabelecimentos/esqueciasenha',
    element: <EsqueciminhaSenha/>
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

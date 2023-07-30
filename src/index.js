import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/style/index.css';
import App from './components/telas/App';
import Estabelecimento from './components/telas//estabelecimento/Estabelecimento';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/telas/login/Login';
import MinhaLoja from './components/telas/minha-loja/MinhaLoja';
import Cardapio from './components/telas/cardapio/Cardapio';
import EditarItemCardapio from './components/telas/cardapio/editar-criar-item-cardapio/EditarItemCardapio';
import Cadastro from './components/telas/login/formulario-cadastro/Cadastro.js';
import EsqueciminhaSenha from './components/telas/login/esqueci-minha-senha/EsqueciMinhaSenha';
import NossaMissao from './components/telas/nossa-missao/NossaMissao';
import Pedidos from './components/telas/pedidos/Pedidos';
import CriarItemCardapio from './components/telas/cardapio/editar-criar-item-cardapio/CriarItemCardapio';
import HomeEstabelecimento from './components/telas/area-estabelecimento/HomeEstabelecimento';
import DetalheDePedido from './components/telas/cardapio/DetalheDePedido';



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
    path:'/estabelecimentos/cardapio/adicionar-produto',
    element: <CriarItemCardapio/>
  },
  {
    path:'/estabelecimentos/esqueciasenha',
    element: <EsqueciminhaSenha/>
  },

  {
    path:'/estabelecimentos/pedidos',
    element: <Pedidos/>
  },
  {
    path:'/estabelecimentos/pedidos/detalhes',
    element: <DetalheDePedido/>
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

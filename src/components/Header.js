import '../App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import logoUbuntuStore from '../assets/img/logo-ubuntu-store.jpeg';
import teste from '../assets/img/teste.png';

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");

    function update() {
      const scrollY = window.scrollY || window.pageYOffset;
      const bodyHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollY / bodyHeight) * 100;

      progressBar.style.width = `${progress}%`;
    }

    // Atualiza a progress bar ao carregar a página
    update();

    // Atualiza a progress bar durante o scroll da página
    window.addEventListener("scroll", update);

    // Limpa o listener do evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  function irParaPaginaEstabelecimento() {
    navigate('/estabelecimento');
  }

  return (
    <div>
      <header>
        <nav>
          <div className="nav-content">
            <img className="ubuntu-store-logo" src={logoUbuntuStore} alt="Logo da empresa UbuntuStore" />
            <button className="baixe-app">
              <p>Baixe o App</p>
              <img src={teste} alt="" />
            </button>
          </div>
          <div className="progress-bar" id="progress-bar"></div>
        </nav>
        <h1>Conheça a UbuntuStore - Sua plataforma de interação entre eventos e estabelecimentos alimentícios</h1>
        <button className="seja-parceiro-btn" onClick={irParaPaginaEstabelecimento}>
          Seja nosso estabelecimento parceiro
        </button>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      {/* Restante do conteúdo do seu aplicativo */}
    </Router>
  );
}

export default App;

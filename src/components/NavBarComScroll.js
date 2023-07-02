import '../index.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoUbuntuStore from '../assets/img/logo-ubuntu-store.jpeg';
import { BotaoBaixeApp } from './BotaoBaixeApp';

function NavBarComScroll() {
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

  function irParaHome() {
    navigate('/');
  }
  
  return (
      <header className="segundo-header">
        <nav>
          <div className="nav-content">
            <img className="ubuntu-store-logo" src={logoUbuntuStore} onClick={irParaHome} alt="Logo da empresa UbuntuStore" />
            <BotaoBaixeApp/>
          </div>
          <div className="progress-bar" id="progress-bar"></div>
        </nav>
      </header>
  );
}
export default NavBarComScroll;
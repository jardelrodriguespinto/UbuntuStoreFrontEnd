import "./barra-lateral.css";
import React from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function BarraLateral() {
  const navigate = useNavigate();
  function navegar(caminho) {
    navigate(caminho);
  }

  return (
    <div id="side">
      <img id="logoEstabelecimento" src={logoUbuntuStore}></img>
      <ul className="barraLateral">
        <div>
          <li className="itemBarraLateral">
            <button
              onClick={navegar("/estabelecimentos/inicio")}
              className="botaoBarraLateral"
            >
              {/* <FontAwesomeIcon className="iconeBarraLateral" icon={faHouse} /> */}
              <p>Inicio</p>
            </button>
          </li>
        </div>
        {/* <ItemBarraLateral
          caminho="/estabelecimentos/minhaloja"
          texto="MinhaLoja"
        />
        <ItemBarraLateral
          caminho="/estabelecimentos/minhaloja"
          texto="Cardápio"
        />
        <ItemBarraLateral caminho="/estabelecimentos/minhaloja" texto="Conta" />
        <ItemBarraLateral caminho="/estabelecimentos/minhaloja" texto="Ajuda" /> */}
      </ul>
    </div>
  );
}
export default BarraLateral;

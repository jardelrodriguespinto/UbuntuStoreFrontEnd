import "./barra-lateral.css";
import React from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";

function BarraLateral() {
  return (
    <div>
      <ul className="barraLateral">
        <img
          className="logoEstabelecimento"
          src={logoUbuntuStore}
          alt="Logo da empresa UbuntuStore"
        />
        <li className="itemBarraLateral">
          <button className="botaoBarraLateral">
            <img
              className="iconeBarraLateral"
              src={logoUbuntuStore}
              alt="Logo da empresa UbuntuStore"
            />
            <div className="textoBarraLateral">Minha Loja</div>
          </button>
        </li>
        <li className="itemBarraLateral">
          <button className="botaoBarraLateral">
            <img
              className="iconeBarraLateral"
              src={logoUbuntuStore}
              alt="Logo da empresa UbuntuStore"
            />
            <div className="textoBarraLateral">Painel de Pedidos</div>
          </button>
        </li>
        <li className="itemBarraLateral">
          <button className="botaoBarraLateral">
            <img
              className="iconeBarraLateral"
              src={logoUbuntuStore}
              alt="Logo da empresa UbuntuStore"
            />
            <div className="textoBarraLateral">Cardapio</div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default BarraLateral;

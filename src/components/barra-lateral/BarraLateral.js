import "./barra-lateral.css";
import React from "react";
import { itensDoMenu } from "./itensDoMenu";
import BotaoLogin from "../botoes/BotaoLogin";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";

function BarraLateral() {
  return (
    <div >
      <ul className="barraLateral">
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
            <div className="textoBarraLateral">Painel de Pedidos</div>
          </button>

        </li>

      </ul>
    </div>
  );
}

export default BarraLateral;

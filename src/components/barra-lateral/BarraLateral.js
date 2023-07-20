import "./barra-lateral.css";
import React from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ItemBarraLateral from "./ItemBarraLateral.js";

function BarraLateral() {
  return (
    <div id="side">
      <img id="logoEstabelecimento" src={logoUbuntuStore}></img>
      <ul className="barraLateral">
        <div>
          <ItemBarraLateral
            texto="Inicio"
            rota="/estabelecimentos/inicio"
            icone={faHouse}
          />
          <ItemBarraLateral
            texto="Minha Loja"
            rota="/estabelecimentos/minhaloja"
            icone={faShop}
          />
          <ItemBarraLateral
            texto="Cardapio"
            rota="/estabelecimentos/cardapio"
            icone={faBookReader}
          />
          <ItemBarraLateral
            texto="Pedidos"
            rota="/estabelecimentos/Pedidos"
            icone={faBookReader}
          />
        </div>
        <div>
          <ItemBarraLateral
            texto="Sair"
            rota=""
            icone={faArrowLeft}
            acao={() => {
              console.log("Logout");
            }}
          />
        </div>
      </ul>
    </div>
  );
}
export default BarraLateral;

import "./barra-lateral.modules.css";
import React from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ItemBarraLateral from "./ItemBarraLateral.js";
import { useNavigate } from "react-router-dom";


function BarraLateral(props) {
  const navegar = useNavigate()
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
            selecionado= {props.selecionado}
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
            rota="/login"
            icone={faArrowLeft}
            acao={() => {
              localStorage.removeItem('token')
              console.log();
            }}
          />
        </div>
      </ul>
    </div>
  );
}
export default BarraLateral;

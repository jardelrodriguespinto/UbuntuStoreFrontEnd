import "./barra-lateral.css";
import React from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { useNavigate } from "react-router-dom";
import ItemBarraLateral from "./item-barra-lateral/ItemBarraLateral"


function BarraLateral() {

  return (
    <div id="side">
      <img id = "logoEstabelecimento"src={logoUbuntuStore}>
      </img>
      <ul className="barraLateral">
       <ItemBarraLateral caminho="/estabelecimentos/inicio" texto= "Inicio"/>
       <ItemBarraLateral caminho="/estabelecimentos/minhaloja" texto= "MinhaLoja"/>
      </ul>
    </div>
  )
  }
export default BarraLateral;

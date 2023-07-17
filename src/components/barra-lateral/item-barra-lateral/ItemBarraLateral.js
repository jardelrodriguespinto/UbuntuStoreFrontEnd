import React from "react";
import "./item-barra-lateral.css";
import logoUbuntuStore from "../../../assets/img/logo-ubuntu-store.jpeg";
import { useNavigate } from "react-router-dom";

function ItemBarraLateral(props) {
  const navigate = useNavigate();
  function navegar() {
    navigate(props.caminho);
  }

  return (
    <div>
      <li className="itemBarraLateral">
        <button onClick={navegar} className="botaoBarraLateral">
          <img className="iconeBarraLateral" src={logoUbuntuStore}></img>
          <div className="textoBarraLateral">
            {props.texto}
          </div>
        </button>
      </li>
    </div>
  );
}
export default ItemBarraLateral;

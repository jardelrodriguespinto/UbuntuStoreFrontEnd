import "./barra-lateral.modules.css";
import React from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function ItemBarraLateral(props) {
  const navigate = useNavigate();
  function navegar(caminho) {
    navigate(caminho);
  }

  return (
    <>
      <li className="itemBarraLateral">
        <button
          onClick={() =>{
            if(props.acao != null){
              props.acao()
            }
            navegar(props.rota)}
          } 
          className="botaoBarraLateral"
        >
          <FontAwesomeIcon className="iconeBarraLateral" icon= {props.icone} />
          <p>{props.texto}</p>
        </button>
      </li>
    </>
  );
}
export default ItemBarraLateral;

import "./barra-lateral.modules.css";
import React from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

function ItemBarraLateral(props) {
  const navigate = useNavigate();
  function navegar(caminho) {
    navigate(caminho);
  }
  

  return (
    <>
      <li className="itemBarraLateral">
        {<Button
        variant="outlined"
          onClick={() =>{
            if(props.acao != null){
              props.acao()
            }
            navegar(props.rota)}
          } 
          className="botaoBarraLateral"
        >
        <Typography variant="h5" color={"black"} textTransform={"capitalize"}>{props.texto}</Typography>

        </Button>}
      </li>
    </>
  );
}
export default ItemBarraLateral;

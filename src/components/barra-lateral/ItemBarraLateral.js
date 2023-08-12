import "./barra-lateral.modules.css";
import React from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Typography, Button, MenuItem, IconButton } from "@mui/material";
import {propiedadesDoTema} from "../../utils/tema"

function ItemBarraLateral(props) {
  const navigate = useNavigate();
  function navegar(caminho) {
    navigate(caminho);
  }
  

  return (
    <>
      {/* <MenuItem className="itemBarraLateral"> */}
      <MenuItem >
        <Button sx={{ backgroundColor: propiedadesDoTema.palette.primariaEstabelecimento.main} }
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

        </Button>

      </MenuItem>
    </>
  );
}
export default ItemBarraLateral;

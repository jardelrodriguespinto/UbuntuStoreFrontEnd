import "./barra-lateral.modules.css";
import React, { useState } from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ItemBarraLateral from "./ItemBarraLateral.js";
import { useNavigate } from "react-router-dom";
import { Button, MenuList } from "@mui/material";
import RenderizadorDeImagem from "../midia/RenderizadorDeImagem";

function BarraLateral(props) {
  const navegar = useNavigate();
  let textoAbertoFechado = useState("Fechado");

  if (localStorage.getItem("disponibilidade") == "true") {
    textoAbertoFechado = "Aberto";
  } else {
    textoAbertoFechado = "Fechado";
  }

  return (
    <div className="barra-lateral">
      <RenderizadorDeImagem imagem="" width= "100%" height= "100%"></RenderizadorDeImagem>
      <MenuList className="barraLateral">
        
          <Button variant="outlined">textoAbertoFechado</Button>
          <ItemBarraLateral
            texto="Inicio"
            rota="/estabelecimentos/inicio"
            icone={faHouse}
          />
          <ItemBarraLateral
            texto="Minha Loja"
            rota="/estabelecimentos/minhaloja"
            icone={faShop}
            selecionado={props.selecionado}
          />
          <ItemBarraLateral
            texto="Cardapio"
            rota="/estabelecimentos/cardapio"
            icone={faBookReader}
          />
          <ItemBarraLateral
            texto="Pedidos"
            rota="/estabelecimentos/pedidos"
            icone={faBookReader}
          />
        
        <div>
          <ItemBarraLateral
            texto="Sair"
            rota="/login"
            icone={faArrowLeft}
            acao={() => {
              localStorage.removeItem("token");
              console.log();
            }}
          />
        </div>
      </MenuList>
    </div>
  );
}
export default BarraLateral;

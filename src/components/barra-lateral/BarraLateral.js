import "./barra-lateral.modules.css";
import React, { useState } from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ItemBarraLateral from "./ItemBarraLateral.js";
import { useNavigate } from "react-router-dom";
import { Box, Button, MenuList, Stack, Typography, colors } from "@mui/material";
import RenderizadorDeImagem from "../midia/RenderizadorDeImagem";
import { propiedadesDoTema } from "../../utils/tema";

function BarraLateral(props) {
  const navegar = useNavigate();
  let textoAbertoFechado = useState("Fechado");

  if (localStorage.getItem("disponibilidade") == "true") {
    textoAbertoFechado = "Aberto";
  } else {
    textoAbertoFechado = "Fechado";
  }
  let aberto= true

  return (
    <Box
      className="barra-lateral"
      sx={{
        backgroundColor: propiedadesDoTema.palette.primariaEstabelecimento.main,
      }}
    >
    <Stack direction={"column"} alignItems={"center"}>
      <RenderizadorDeImagem
        // imagem=""
        width="100%"
        height="100%"
      ></RenderizadorDeImagem>
      {
        aberto &&
      <Button variant="contained">
        <Typography color={"black"}>Aberto</Typography>
      </Button>
      }
      <MenuList
        className="barraLateral"
        sx={{
          backgroundColor:
            propiedadesDoTema.palette.primariaEstabelecimento.main,
            width: "100%"
        }}
      >
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
      </Stack>
    </Box>
  );
}
export default BarraLateral;

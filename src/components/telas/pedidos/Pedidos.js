import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../propriedades";
import CardPedido from "../../cards/ItemPedido";
import "./pedidos.css";
import { Box, Button, ButtonGroup, Grid, Tab, ThemeProvider, createTheme } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import GradeDePedidos from "../../grade/GradeDePedidos";

import {propiedadesDoTema} from "../../../utils/tema";

function Pedidos() {
  const [lista, setLista] = useState([]);
  const [secoesPedidos, setSecoesPedidos] = useState([]);
  const [guia, setguia] = useState(0);
  const tema = createTheme(propiedadesDoTema);

  const obterPedidos = async () => {
    try {
      const response = await axios.get(
        ubuntuIp + "/estabelecimento/telas/pedidos/list",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data.pedidos);
      setSecoesPedidos(response.data.pedidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obterPedidos();
  }, []);

  return (
    <ThemeProvider theme = {tema}>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
          <h1 className="titulo-pagina">Pedidos</h1>
          <GradeDePedidos props={secoesPedidos}></GradeDePedidos>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Pedidos;

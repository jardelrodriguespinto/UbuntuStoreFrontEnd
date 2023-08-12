import React from 'react';
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import "./minhaLoja.css"
import { Box, Grid, Tab, ThemeProvider, Typography, createTheme } from "@mui/material";
import {propiedadesDoTema} from "../../../utils/tema";

function MinhaLoja() {
  const tema = createTheme(propiedadesDoTema);

  return (
    <ThemeProvider theme={tema} >
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default MinhaLoja;

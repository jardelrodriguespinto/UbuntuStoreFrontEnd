import React from "react";
import "./home-estabelecimento.modules.css";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import Footer from "../../Footer";
import BarraLateral from "../../barra-lateral/BarraLateral";
import BotaoLogin from "../../botoes/BotaoLogin";
import { Paper, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";

function HomeEstabelecimento() {
  return (
    <div >
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
        <Paper sx={{padding: "20px"}}>
              <Typography variant="h3"  textAlign={"center"} fontFamily={ 'Roboto'}>Seja bem vinde</Typography>
              <Typography variant="body2"> Este é seu espaço dentro da Ubuntu, aqui você pode gerenciar suas atividades dentro da plataforma acessando os  itens do menu ao lado. Logo mais teremos novidades por aqui. </Typography>
        </Paper>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default HomeEstabelecimento;

import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../propriedades";
import ItemCardapio from "../../item-cardapio/ItemCardapio";
import "./cardapio.css";
import { Box, Grid, Typography } from "@mui/material";

function DetalheDePedido() {
  const [lista, setLista] = useState([]);
  const [modificando, setModificando] = useState(false);
  const [propriedades, setPropriedades] = useState(false);
  const [responseState, setResponseState] = useState(null); // Novo estado para armazenar a resposta do Axios

  const itemCardapioNotify = async () => {
    try {
      const response = await axios.post(
        ubuntuIp + "/estabelecimento/telas/listarprodutos",
        null,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      setLista(response.data.lista);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    itemCardapioNotify();
  }, []);

  return (
    <div>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <Box>
          <Box>
            <Typography className="titulo-pagina" color={"black"} variant="h3">
              Cardapio
            </Typography>
          </Box>

          <Grid container   className="grade-cardapio"  
            xs= {12}
            sx={{ gap: "15px", margin: "50px"}}
          >
            {lista.map((i) => {
              return <ItemCardapio props= {i}></ItemCardapio>;
            })}
          </Grid>
        
        </Box>
      </div>

      <Footer />
    </div>
  );
}

export default DetalheDePedido;

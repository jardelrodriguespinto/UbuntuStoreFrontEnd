import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../propriedades";
import ItemCardapio from "../../item-cardapio/ItemCardapio";
import "./cardapio.css";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function Cardapio() {
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
      setResponseState(response.data);
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
        <main>
          <Box>
            <Typography className="titulo-pagina" color={"black"} variant="h3">
              Cardapio
            </Typography>
          </Box>


          <Box
            className="grade-cardapio"
            sx={{ display: "grid", gap: "15px", margin: "50px", width: "100%" }}
          ></Box>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Cardapio;

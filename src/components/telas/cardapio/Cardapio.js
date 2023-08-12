import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../propriedades";
import ItemCardapio from "../../item-cardapio/ItemCardapio";
import "./cardapio.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate } from "react-router-dom";
  import { Box, Grid, Tab, ThemeProvider, Typography, createTheme } from "@mui/material";
  import {propiedadesDoTema} from "../../../utils/tema";


function Cardapio() {
  const [lista, setLista] = useState([]);
  const tema = createTheme(propiedadesDoTema);
  
  let navegar = useNavigate()
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
      if( error.response.status == 402){
        
      }
      console.log(error);
    }
  };
  useEffect(() => {
    itemCardapioNotify();
  }, []);

  return (
    <ThemeProvider theme = {tema}>
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
    </ThemeProvider>
  );
}

export default Cardapio;

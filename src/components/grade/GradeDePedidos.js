import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Tab,
  Typography,
  colors,
} from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import CardPedido from "../cards/ItemPedido";
import ItemPedido from "../cards/ItemPedido";

function GradeDePedidos(props) {
  const [lista, setLista] = useState([]);
  const [secoesPedidos, setSecoesPedidos] = useState([]);
  console.log(props.props.length);
  const [guia, setguia] = useState(0);
  
  useEffect(()=>{
      setSecoesPedidos(props.props)
    });
    console.log(secoesPedidos)
    if (secoesPedidos.length > 0) {
        console.log("tab")
    return (
      
        <TabContext value={guia}>
          <TabList value={guia}>
            {secoesPedidos.map((obj, index) => {
              console.log(secoesPedidos.length);
              return (
                <Tab
                  onClick={() => {
                    setguia(index);
                  }}
                  value={index}
                  label={obj.titulo}
                ></Tab>
              );
            })}
          </TabList>

          {secoesPedidos.map((secao, index) => {
            return (
              <TabPanel value={index}>
                <Grid
                  container
                  className="grade-pedidos"
                  justifyItems={"center"}
                >
                  {secao.secao.map((card) => {
                    return (
                      <ItemPedido
                        status={card.status}
                        id={card.pedidoId}
                        titulo={card.nomeDoCliente}
                      ></ItemPedido>
                    );
                  })}
                </Grid>
              </TabPanel>
            );
          })}
        </TabContext>
     
    );
  } else {
    return (
      <Paper
        sx={{ padding: "20px" }}
        elevation={4}
        width="200px"
        height="200px"
      >
        <Typography textAlign={"center"} className="texto-Pedidos">
          Ainda não houve pedidos
        </Typography>
      </Paper>
    );
  }
}

export default GradeDePedidos;

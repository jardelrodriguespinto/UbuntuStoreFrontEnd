import React from "react";

import {} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../propriedades";
import "./card-pedido.css";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import RenderizadorDeImagem from "../midia/RenderizadorDeImagem";

function ItemPedido(props) {
  const navigate = useNavigate();
  const detalhesDePedido = async () => {
    navigate("/estabelecimentos/pedidos/detalhes");
  };

  const responderPedido = async (foiAceito) => {
    try {
       localStorage.getItem("estabelecimentoId");
      const response = await axios.post(
        ubuntuIp + "/estabelecimento/telas/pedidos/responder",
        {
          idDePedido: props.id,
          foiAceito: foiAceito,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };
  return (
    <Grid
      item
      className="card-pedido"
      m="20px"
      xs={12}
      sm={12}
      md={6}
      lg={4}
      xl={4}
    >
    <Box display={"flex"} justifyContent={"center"}>
    <RenderizadorDeImagem  width= {props.width} height = {props.height}></RenderizadorDeImagem>
    </Box>
      <Box>
        <div className="card-titulo">{props.titulo}</div>
      </Box>
      <div className="card-botoes">
        {props.status === "PEDIDO"  && (
          <Stack direction={"column"}>
            <Button
              variant="contained"
              onClick={() => {
                
                responderPedido(true);
              }}
            >
              <Typography variant="body2" fontSize={"12px"}>
                Recusar
              </Typography>
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                detalhesDePedido();
              }}
            >
              <Typography variant="body2" fontSize={"12px"}>
                Ver detalhes
              </Typography>
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                responderPedido(true);
              }}
            >
              <Typography variant="body2" fontSize={"12px"}>
                Aceitar
              </Typography>
            </Button>
          </Stack>
        )}
        {props.status === "ACEITO"  && (
          <Stack direction={"column"}>

            <Button
              variant="contained"
              onClick={() => {
                responderPedido(true);
              }}
            >
              <Typography variant="body2" fontSize={"12px"} textTransform={"capitalize"}>
                Iniciar Preparo
              </Typography>
            </Button>
          </Stack>
        )}
        {props.status === "PREPARANDO"  && (
          <Stack direction={"column"}>

            <Button
              variant="contained"
              onClick={() => {
                responderPedido(true);
                window.location.reload();
              }}
            >
              <Typography variant="body2" fontSize={"12px"} textTransform={"capitalize"}>
                Pronto para entrega
              </Typography>
            </Button>
          </Stack>
        )}
        {props.status === "AGUARDANDO_ENTREGA"  && (
          <Stack direction={"column"}>

            <Button
              variant="contained"
              onClick={() => {
                responderPedido(true);
              }}
            >
              <Typography variant="body2" fontSize={"12px"} textTransform={"capitalize"}>
                Iniciar entrega
              </Typography>
            </Button>
          </Stack>
        )}
        {props.status === "ENTREGANDO"  && (
          <Stack direction={"column"}>

            <Button
              variant="contained"
              onClick={() => {
                responderPedido(true);
              }}
            >
              <Typography variant="body2" fontSize={"12px"} textTransform={"capitalize"}>
                Concluir entrega
              </Typography>
            </Button>
          </Stack>
        )}
      </div>
    </Grid>
  );
}

export default ItemPedido;

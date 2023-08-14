import React from "react";
import "./item-cardapio.modules.css";

import { useNavigate } from "react-router-dom";

import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Card, CardContent } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import RenderizadorDeImagem from "../midia/RenderizadorDeImagem";

function ItemCardapio(props) {
  const navigate = useNavigate();
  const navegarParaProduto = () => {
    console.log(localStorage.setItem("produto", props.props.id));
    navigate("/estabelecimentos/cardapio/edicao");
  };
  const solicitarExclusao = () => {
    console.log("item excluido");
  };
  const excluirItem = () => {
    if (window.confirm("Tem certeza que deseja remover seu produto?")) {
      solicitarExclusao();
    } else {
    }
  };
  console.log(props);
  // localStorage.setItem(
  //   "produto",
  //   props.
  // )
  return (
    <Grid item width="100%" xs={6} sm={4} md={3} lg={3} xl={3}>
      <Card c sm={6} sx={{ width: "100%", bg: blue }}>
        <CardContent xs="12" width="100%" bg="black">
          <Stack direction={"column"}>
            <Box display={"flex"} justifyContent={"center"}>
              <RenderizadorDeImagem
                imagem={props.props.imagem}
                width="100%"
                height="500"
              ></RenderizadorDeImagem>
            </Box>

            <Typography className="titulo-pagina">
              {props.props.titulo}
            </Typography>
            <Typography>{props.props.preco}</Typography>
            <Stack direction="row" width="100%">
              <>
                <Typography>{props.props.avaliacao}</Typography>
              </>
            </Stack>
            <Stack direction="column" width="100%">
              <Button
                variant="contained"
                onClick={() => {

                  navegarParaProduto();
                }}
              >
                <Typography
                  textTransform={"none"}
                  onClick={() => {
               
                  }}
                >
                  {" "}
                  Mais Detalhes
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ItemCardapio;

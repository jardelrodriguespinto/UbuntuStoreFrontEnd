import React from "react";
import "./item-cardapio.modules.css";
import { useState, useEffect } from "react";
import { BinaryToImage } from "../../utils/imageUtil.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonGroup,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Box, Card, CardContent } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Padding } from "@mui/icons-material";
import logo from "../../assets/img/logo-ubuntu-store.jpeg";

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
  console.log(props.props);
  return (
    <Grid 
    item
    width="100%"
    xs={6}
    sm={4}
    md={3}
    lg={3}
    xl={3}>
  
        <Card c sm ={6} sx={{ width: "100%", bg :blue }}>
          <CardContent xs="12" width = "100%" bg= "black">
            <Stack direction={"column"}>
              <img id="logoEstabelecimento" src={logo}></img>

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
                <Button variant="contained"  onClick={() =>{
                  navegarParaProduto();
                }}>
                  <Typography textTransform={"none"}> Mais Detalhes</Typography>
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
    
    </Grid>
  );
  {
    /* <div className="item-produto">
        <BinaryToImage
          className="imagem-produto"
          binaryString={props.imagem}
          width={200}
          height={200}
        />
        <div className="informacoes-produto">
          <div className="nome-preco">
            <p className="nome-produto">{props.titulo}</p>
            <p className="preco-produto">{props.preco}</p>
          </div>
          <div id="info-e-acoes">
            <div></div>
            <div className="acoes-produto">
              <Button
              color="primary"
                className="botao-modificar-produto"
                onClick={() => {
                  navegarParaProduto();
                }}
              >
                <FontAwesomeIcon className="iconeBarraLateral" icon={faPen} />
              </Button>
              <Button color="error"
                className="botao-excluir-produto"
                onClick={() => {
                  excluirItem();
                }}
              >
                <FontAwesomeIcon className="iconeBarraLateral" icon={faXmark} />
              </Button>
            </div>
          </div>
        </div>
      </div> */
  }
}

export default ItemCardapio;

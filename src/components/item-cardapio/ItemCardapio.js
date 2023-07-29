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
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Box, Card, CardContent } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Padding } from "@mui/icons-material";
import logo from "../../assets/img/logo-ubuntu-store.jpeg";

function ItemCardapio(props) {
  const navigate = useNavigate();

  const navegarParaProduto = () => {
    console.log(localStorage.setItem("produto", props.id));
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
  return (
    <Card className="card" sx={{ width: { sm: "80%", md: "100%" } }}>
      <CardContent>
        <Stack direction={"column"}>
          <ImageList>
            <ImageListItem>
              <img id="logoEstabelecimento" src={logo}></img>
            </ImageListItem>
          </ImageList>

          <Typography className="titulo-pagina">{props.titulo}</Typography>
          <Stack direction="row" width="100%" >
            <Box >
              <Typography>{props.price}</Typography>
            </Box>
            <Box>
              <Typography>{props.avaliacao}</Typography>
            </Box>
          </Stack>
        </Stack>
      
      </CardContent>
    </Card>
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

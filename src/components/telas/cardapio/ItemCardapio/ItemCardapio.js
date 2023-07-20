import React from "react";
import HeaderEstabelecimento from "../../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../../barra-lateral/BarraLateral";
import Footer from "../../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemCardapio(props) {
  const [id, setId] = useState("");
  const [titulo, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [responseState, setResponseState] = useState(null); // Novo estado para armazenar a resposta do Axios
  console.log(props);
  return (
    <>
      <div className="item-cardapio">
        {props.id}
        {props.imagem}
        {props.preco}
        {props.titulo}
      </div>
    </>
  );
}

export default ItemCardapio;

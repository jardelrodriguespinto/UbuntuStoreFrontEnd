import React from "react";
import "./item-cardapio.modules.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../../propriedades";
import { BinaryToImage } from "../../../../utils/imageUtil.js";
import { useNavigate } from "react-router-dom";

function ItemCardapio(props) {
  const [modificandoProduto, definirModificandoProduto] = useState(false);
  const [IdDeProdutoModificado, definirIdDeProdutoModificado] = useState(0);
  const navigate = useNavigate();

  const navegarParaProduto = () => {
    console.log(localStorage.setItem("produto", props.id));
    navigate("/estabelecimentos/cardapio/edicao");
  };


  return (
    <>
      <div className="item-produto">
        {/* <BinaryToImage
          className="imagem-produto"
          binaryString={props.imagem}
          width={200}
          height={200}
        /> */}
        <div className="informacoes-produto">
          <p className="nome-produto">{props.titulo}</p>
          <p className="preco-produto">{props.preco}</p>
        </div>
        <div className="acoes-produto">
          <button
            onClick={() => {
                navegarParaProduto()
            }}
          >
            Modificar
          </button>
          <button
            onClick={() => {
              definirIdDeProdutoModificado(props.id);
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCardapio;

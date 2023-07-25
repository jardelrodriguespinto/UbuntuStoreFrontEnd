import React from "react";
import "./item-cardapio.modules.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../../propriedades";
import { BinaryToImage } from "../../../../utils/imageUtil.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ItemCardapio(props) {
  const [modificandoProduto, definirModificandoProduto] = useState(false);
  const [IdDeProdutoModificado, definirIdDeProdutoModificado] = useState(0);
  const navigate = useNavigate();

  const navegarParaProduto = () => {
    console.log(localStorage.setItem("produto", props.id));
    navigate("/estabelecimentos/cardapio/edicao");
  };
  const solicitarExclusao = () => {
    console.log("item excluido")

  };
  const excluirItem = () => {
    if (window.confirm("Tem certeza que deseja remover seu produto?")) {
      // Executar a ação aqui caso o usuário confirme
      // Por exemplo, pode ser uma função ou chamada para API
      solicitarExclusao();
    } else {
      // Ação cancelada pelo usuário
    }
  };
  return (
    <>
      <div className="item-produto">
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
              <button
                className="botao-modificar-produto"
                onClick={() => {
                  navegarParaProduto();
                }}
              >
                <FontAwesomeIcon className="iconeBarraLateral" icon={faPen} />
              </button>
              <button
                className="botao-excluir-produto"
                onClick={() => {
                  excluirItem();
                }}
              >
                <FontAwesomeIcon className="iconeBarraLateral" icon={faXmark} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCardapio;

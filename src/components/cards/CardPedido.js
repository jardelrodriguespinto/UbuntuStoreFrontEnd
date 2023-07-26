import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../propriedades";
import "./card-pedido.css"


function CardPedido(props) {
  const [lista, setLista] = useState([]);
  const [responseState, setResponseState] = useState(null);

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
  return <>
        <div className="card-pedido">
            <img className="card-image" src="logo"></img>
            <div className="card-titulo">{props.titulo}</div>
            <div className="card-informacao">Pedidos x vezes por semana</div>
            <div className="card-botoes">
                <button className="card-botao-recusar">
                <FontAwesomeIcon className="iconeBarraLateral" icon={faX} />
                </button>
                <button className="card-botao-aceitar">
                <FontAwesomeIcon className="iconeBarraLateral" icon={faCheck} />
                </button>
            </div>
        </div>
  </>;
}

export default CardPedido;

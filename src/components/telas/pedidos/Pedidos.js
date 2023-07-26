import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../propriedades";
import CardPedido from "../../cards/CardPedido";
import "./pedidos.css"

function Pedidos() {
  const [lista, setLista] = useState([]);
  const [modificando, setModificando] = useState(false);
  const [propriedades, setPropriedades] = useState(false);
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
    itemCardapioNotify()
  },[]);
  return <>
          <HeaderEstabelecimento logo={true} />
          <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
          <h1 className="titulo-pagina">Pedidos</h1>
          <div className="cards-grid">
          {lista.map((obj, index) => {
            return (
              <CardPedido
              id={obj.id}
              preco={obj.preco}
              imagem={obj.imagem}
              titulo={obj.titulo}
              key={index}
              // onNotify={}
              />
              );
            })}
            </div>
        </main>
      </div>
      </>
}

export default Pedidos;

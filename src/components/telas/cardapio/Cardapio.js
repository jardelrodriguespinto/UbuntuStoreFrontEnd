import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../propriedades";
import ItemCardapio from "./item-cardapio/ItemCardapio";

function Cardapio() {
  const [lista, setLista] = useState([]);
  const [modificando, setModificando] = useState(false);
  const [propriedades, setPropriedades] = useState(false);
  const [responseState, setResponseState] = useState(null); // Novo estado para armazenar a resposta do Axios

  const itemCardapioNotify = async () => {
    try {
      const response = await axios.post(
        ubuntuIp + "/estabelecimento/telas/produtos",
        null,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setResponseState(response.data);
      setLista(response.data.lista);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
          <h1>Cardapio</h1>
          {lista.map((obj, index) => {
            return (
              <ItemCardapio
                id={obj.id}
                preco={obj.preco}
                imagem={obj.imagem}
                titulo={obj.titulo}
                key={index}
                // onNotify={}
              />
            );
          })}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Cardapio;

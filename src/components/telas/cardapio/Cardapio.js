import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import ItemCardapio from "./ItemCardapio/ItemCardapio";

function Cardapio() {
  const [lista, setLista] = useState([]);
  const [senha, setSenha] = useState("");
  const [responseState, setResponseState] = useState(null); // Novo estado para armazenar a resposta do Axios
  let resposta = null;
  console.log("bla");
  const getLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:7200/estabelecimento/telas/listarprodutos",
        null,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlc3RAZXN0LmNvbSIsImlhdCI6MTY4OTg5NTE3NiwiZXhwIjoxNjg5ODk2NjE2fQ.iFOUaJie2kpnCqsp6N2qZJbB6jOVunqzJG8-h2BLibs",
          },
        }
      );

      console.log(response);
      resposta = response.data;
      setResponseState(response.data);
      setLista(response.data.lista);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLogin();
    //     const { id } = responseState.lista[0].id;
    // const { imagem } = responseState.lista[0].imagem;
    // const { preco } = responseState.lista[0].preco;
    // const { titulo } = responseState.data.lista[0].titulo;
  }, []);
  console.log(responseState);

  // setResponseState(response.data);
  console.log(responseState);

  console.log(lista);
  return (
    <div>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
          <h1>Cardapio</h1>
          {lista.map((obj,index,) => {
            return (
              <ItemCardapio
                id={obj.id}
                preco={obj.preco}
                imagem={obj.imagem}
                titulo={obj.titulo}
                key= {index}
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

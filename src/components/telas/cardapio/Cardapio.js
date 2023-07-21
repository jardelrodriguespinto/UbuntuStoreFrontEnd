import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function Cardapio() {
  const [usuario, setUsuario] = useState([]);
  const [senha, setSenha] = useState("");
  const [responseState, setResponseState] = useState(null); // Novo estado para armazenar a resposta do Axios

    const getLogin = async () => {
    console.log("bla");    
    try {
      const response = await axios.post('http://localhost:7200/estabelecimento/telas/listarprodutos',null,{
        headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmZXJuYW5kb0BnbWFpbC5jb20iLCJpYXQiOjE2ODk4NjE1NTgsImV4cCI6MTY4OTg2Mjk5OH0.VDWtlMOMIK6eCR_Z7zKieLPtr_9O8MZK6Z1M-Of4qLg"
      }
    }
    )
    ;
      console.log(response);
      setResponseState(response.data)
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=> {
  getLogin()
},[])

  return (
    <div>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
          <h1>Cardapio</h1>
          {responseState && <pre>{JSON.stringify(responseState, null, 2)}</pre>}

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Cardapio;

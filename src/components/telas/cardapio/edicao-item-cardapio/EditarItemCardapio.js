import react from "react";
import HeaderEstabelecimento from "../../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../../barra-lateral/BarraLateral";
import Footer from "../../../Footer";
import "./editarItemCardapio.css";
import axios, { AxiosHeaders } from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../../propriedades";
import { useNavigate } from "react-router-dom";

function EditarItemCardapio(props) {
  const navigate = useNavigate();
  const id = localStorage.getItem("produto");
  const token = localStorage.getItem("token");
  const estabelecimentoId = useState(localStorage.getItem("estabelecimentoId"));
  const [output,setOutPut] = useState() 
  useEffect(() => {
    obterTela();
  }, []);
  const obterTela = async () => {const resposta = await axios.post(
    ubuntuIp.toString() + "/estabelecimento/telas/editarproduto",
    {
      id: estabelecimentoId,
      idDoProduto: id,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  console.log(resposta)
  setOutPut( resposta.data)
  }
  return (
    <div>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>{JSON.stringify(output)}</main>
      </div>
      <Footer />
    </div>
  );
}

export default EditarItemCardapio;

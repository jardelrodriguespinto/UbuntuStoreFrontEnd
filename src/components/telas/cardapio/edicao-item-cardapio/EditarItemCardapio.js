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
  const [nome,setNome] = useState() 
  const [preco,setPreco] = useState() 
  const [nota,setNota] = useState() 
  const [descricao,setDescricao] = useState() 
  const [gluten,setGluten] = useState() 
  const [vegetariano,setVegetariano] = useState() 
  const [vegano,setVegano] = useState() 
  const [calorias,setCalorias] = useState() 
  const [tempoDePreparo,setTempoDePreparo] = useState() 
  const [destacado,setDestacado] = useState() 
  const [disponivel,setDisponivel] = useState() 

  useEffect(() => {
    obterTela();
  }, []);
  const obterTela = async () => {
    const resposta = await axios.post(
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
  setNome( resposta.data.name)
  setPreco( resposta.price)
  setNota( resposta.rate)
  setDescricao( resposta.description)
  setGluten( resposta.containsGluten)
  setVegetariano( resposta.vegetarianStamp)
  setVegano( resposta.veganStamp)
  setCalorias( resposta.calories)
  setTempoDePreparo( resposta.cookingTime)
  setDestacado( resposta.highlighted)
  setDisponivel( resposta.disponivel)
  }
  return (
    <div>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
          <form>
            <label>Nome</label>
            <input name="nome" value={nome} onChange={(e)=>{
              setNome(e.target.value)
            }}></input>
          </form>



        </main>
      </div>
      <Footer />
    </div>
  );
}

export default EditarItemCardapio;

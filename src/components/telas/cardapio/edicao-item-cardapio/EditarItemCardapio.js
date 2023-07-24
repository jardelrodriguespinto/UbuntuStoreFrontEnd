import HeaderEstabelecimento from "../../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../../barra-lateral/BarraLateral";
import Footer from "../../../Footer";
import "./editar-item-cardapio.modules.css";
import axios, { AxiosHeaders } from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../../propriedades";
import { useNavigate } from "react-router-dom";
import Label from "../../../../utils/Label";
import InputTexto from "../../../../utils/Input";
import Input from "../../../../utils/Input";

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

  // useEffect(() => {
  //   obterTela();
  // }, []);
  // const obterTela = async () => {
  //   const resposta = await axios.post(
  //   ubuntuIp.toString() + "/estabelecimentos/telas/editarproduto",
  //   {
  //     id: estabelecimentoId,
  //     idDoProduto: id,
  //   },
  //   {
  //     headers: {
  //       Authorization: token,
  //     },
  //   }
  // );

/* Obter json com o retorno pra criar a tela  */

  // console.log(resposta)

  // setOutPut( resposta.data)
  // setNome( resposta.data.name)
  // setPreco( resposta.price)
  // setNota( resposta.rate)
  // setDescricao( resposta.description)
  // setGluten( resposta.containsGluten)
  // setVegetariano( resposta.vegetarianStamp)
  // setVegano( resposta.veganStamp)
  // setCalorias( resposta.calories)
  // setTempoDePreparo( resposta.cookingTime)
  // setDestacado( resposta.highlighted)
  // setDisponivel( resposta.disponivel)
  // }

  return (
    <>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main className="formulario-cadastro">
          <form className="cadastro" onSubmit={(e) => e.preventDefault()}>
          <h2 className="titulo">Cadastrar Produto</h2>
            <div className="inputs">
              <Label nome={'Nome'} classNameDiv="dados" conteudo={
                <Input placeholder={"Nome"} type={"text"} nomeClasse={"input-texto"} name={"nome"}/>
              }/>
              <Label nome={'Preco'} classNameDiv="dados" conteudo={
                <Input placeholder={"Preco"} type={"number"} nomeClasse={"input-preco"} name={"preco"}/>
              }/>
              <Label nome={'Calorias'} classNameDiv="dados" conteudo={
                <Input placeholder={"Calorias"} type={"text"} nomeClasse={"input-numero"} name={"calorias"}/>
              }/>
              <Label nome={'Tempo de Preparo'} classNameDiv="dados" conteudo={
                <Input placeholder={"Tempo de Preparo"} type={"text"} nomeClasse={"input-texto"} name={"tempo"}/>
              }/>
              <Label nome={'Descrição'} classNameDiv="dados descricao" conteudo={
                <Input placeholder={"Descrição"} isDescricao={true} type={"text"} nomeClasse={"input-descricao"} name={"descricao"}/>
              }/>
              <div className="groupbox">
                <Label nome={'Destacado'} classNameDiv="dados-checkbox" conteudo={
                  <Input type={"checkbox"} nomeClasse={"input-checkbox"} name={"destacado"}/>
                }/>
                <Label nome={'Disponível'} classNameDiv="dados-checkbox" conteudo={
                  <Input type={"checkbox"} nomeClasse={"input-checkbox"} name={"disponivel"}/>
                }/>
                <Label nome={'Glúten'} classNameDiv="dados-checkbox" conteudo={
                  <Input type={"checkbox"} nomeClasse={"input-checkbox"} name={"gluten"}/>
                }/>
                <Label nome={'Vegetariano'} classNameDiv="dados-checkbox" conteudo={
                  <Input type={"checkbox"} nomeClasse={"input-checkbox"} name={"vegetariano"}/>
                }/>
                <Label nome={'Vegano'} classNameDiv="dados-checkbox" conteudo={
                  <Input type={"checkbox"} nomeClasse={"input-checkbox"} name={"vegano"}/>
                }/>
              </div>
            </div>
          </form>
          
        </main>
      </div>
      <Footer />
    </>
  );
}

export default EditarItemCardapio;

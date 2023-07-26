import Label from "../../../../utils/Label";
import Input from "../../../../utils/Input";
import "./form-editar-criar-produto.modules.css";
import BotaoCadastrarProduto from "../../../botoes/BotaoCadastrarProduto";

function FormCriarEditarProduto({titulo}) {
    return (
        <form className="cadastro" onSubmit={(e) => e.preventDefault()}>
            <h2 className="titulo">{titulo}</h2>
            <div className="inputs">
                <Label nome={'Nome'} classNameDiv="dados" conteudo={
                <Input placeholder={"Nome"} type={"text"} nomeClasse={"input-texto"} name={"nome"}/>
                }/>
                <Label nome={'Preco'} classNameDiv="dados" conteudo={
                <Input placeholder={"Preço"} type={"number"} nomeClasse={"input-preco"} name={"preco"}/>
                }/>
                <Label nome={'Calorias'} classNameDiv="dados" conteudo={
                <Input placeholder={"Calorias"} type={"text"} nomeClasse={"input-numero"} name={"calorias"}/>
                }/>
                <Label nome={'Tempo de Preparo'} classNameDiv="dados" conteudo={
                <Input placeholder={"Tempo de Preparo"} type={"text"} nomeClasse={"input-texto"} name={"tempo"}/>
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
            <Label nome={'Descrição'} classNameDiv="dados descricao" conteudo={
              <Input placeholder={"Insira a descrição do produto."} isDescricao={true} type={"text"} nomeClasse={"input-descricao"} name={"descricao"}/>
            }/>
            <BotaoCadastrarProduto className="btn-enviar"/>
          </div>
        </form>
    );
}

export default FormCriarEditarProduto;
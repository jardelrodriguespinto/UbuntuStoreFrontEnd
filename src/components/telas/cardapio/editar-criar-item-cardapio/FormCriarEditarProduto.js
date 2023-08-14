import Label from "../../../../utils/Label";
import Input from "../../../../utils/Input";
import "./form-editar-criar-produto.modules.css";
import BotaoCadastrarProduto from "../../../botoes/BotaoCadastrarProduto";

function FormCriarEditarProduto({titulo}) {
    return (
        <form className="cadastro" onSubmit={(e) => e.preventDefault()}>
            <h2 className="titulo">{titulo}</h2>
           
        </form>
    );
}

export default FormCriarEditarProduto;
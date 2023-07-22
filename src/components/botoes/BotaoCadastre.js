import "./botao-cadastre.css";
import { useNavigate } from "react-router-dom";

function BotaoCadastre() {
  
  const navigate = useNavigate();
  function irParaCadastro() {
    navigate("/cadastro");
  }

  return (
      <button
        className="botao-cadastre"
        onClick={()=> irParaCadastro()}>Cadastre-se
      </button>
  );
}
export default BotaoCadastre;

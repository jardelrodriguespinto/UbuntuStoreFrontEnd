import "./style/botao.css";
import { useNavigate } from "react-router-dom";

function BotaoLogin() {
  const navigate = useNavigate();
  function irParaLogin() {
    navigate("/login");
  }

  return (
      <button className="botao-login"  onClick={irParaLogin}>Login</button>
  );
}
export default BotaoLogin;

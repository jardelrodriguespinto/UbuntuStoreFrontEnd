import "./loginForm.css";
import { useNavigate } from "react-router-dom";

function login(){
return true
}
function LoginForm() {
  const navigate = useNavigate();
  function navegarParaHome(){

    let resposta = login()

    if(resposta === true){

      navigate("/estabelecimentos/home")
    
    }
    
  }
  
  return (
    <form className="formulario">
      <div className="form-img-backgroud">
      <h1>Ubuntu</h1>
      </div>
      <div className="campos">
        <input
          className="inputEmail"
          placeholder="Usuario"
          name="usuario"
          type="text"
          maxLength={50}
        />
        <input
          className="inputSenha"
          placeholder="Senha"
          type="password"
          maxLength={30}
        />
      </div>
      
      <button class="botao-login" onClick={navegarParaHome}>Login</button>
    </form>
  );
}

export default LoginForm;

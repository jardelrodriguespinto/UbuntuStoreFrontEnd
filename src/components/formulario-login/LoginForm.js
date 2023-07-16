import "./loginForm.css";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
function LoginForm() {
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
          maxLength={30}
        />
        <input
          className="inputSenha"
          placeholder="Senha"
          type="password"
          maxLength={30}
        />
      </div>
      
      <button class="botao-login">Login</button>
    </form>
  );
}

export default LoginForm;

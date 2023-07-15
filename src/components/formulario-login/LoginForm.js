import "./loginForm.css";

function LoginForm() {
  return (
    <form className="formulario">
      <div className="campos">
      <input className="inputEmail" placeholder='Usuario' name = 'usuario' type="text" maxLength={30}/>
			<input className="inputSenha"placeholder='Senha' type="password" maxLength={30}/>
      </div>
			<button class="login">Login</button>
  
    </form>
  );
}

export default LoginForm;

import "../assets/style/login-form.css"

function LoginForm() {
  return (
    <form className="formulario">
      <label for='usuario'></label>
      <input placeholder='Email' name = 'usuario' type="text" maxLength={30}/>
			<input placeholder='Password' type="password" maxLength={30}/>
			<button class="login">Login/</button>
  
    </form>
  );
}

export default LoginForm;

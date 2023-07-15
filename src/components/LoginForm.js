import "../components/style/loginForm.css";

function LoginForm() {
  return (
    <div>
      <form>
        <label for="usuario">
          <b>Usuario</b>
        </label>
        <input name="usuario" required={true} />
        <label for="senha">
          <b>Senha</b>
        </label>
        <input name="senha" required={true} />
        <div>
          <button type="submit">Login</button>
        </div>
        
        <div>
          <button>Cadastrar-se</button>
          <button>Esqueci a senha</button>
        </div>
      </form>

      {/* <form >
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>Lembrar de mim</input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>Senha</input>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember">Remember me</input> 
    </label>
  </div>

  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form> */}
    </div>
  );
}
export default LoginForm;

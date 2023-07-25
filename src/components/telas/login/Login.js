
import LoginForm from './formulario-login/LoginForm';
import './login.modules.css';

function Login(props) {
  const emailConfirmado= props.emailConfimado;
  
  return (
    <div className='telaLogin'>
     <LoginForm/>
    </div>
  );
}
export default Login;

import './login.css';
import LoginForm from './formulario-login/LoginForm';

function Login(props) {
  const emailConfirmado= props.emailConfimado;
  
  return (
    <div className='telaLogin'>
     <LoginForm/>
    </div>
  );
}
export default Login;

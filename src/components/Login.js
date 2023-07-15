import '../assets/style/login.css';
import Header from '../components/Header';
import LoginForm from './formulario-login/LoginForm';



function Login() {

  return (
    <div>
      <Header
      logo={true}
      baixar={false}
      login={false}
      navBar={false}
      />
     <LoginForm/>

    </div>
  );
}
export default Login;

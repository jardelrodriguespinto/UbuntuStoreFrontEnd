import '../components/style/login.css';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';



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

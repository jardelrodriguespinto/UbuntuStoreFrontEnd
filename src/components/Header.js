import '../index.css';
import NavBarComScroll from './NavBarComScroll';

function Header(props) {
  
  

  return (
    <div>
      <header>
        {<NavBarComScroll
         logo = {props.logo}
        baixar={props.baixar}
        estabelecimentos={props.estabelecimentos}
        nossaMissao={props.nossaMissao}
        login= {props.login}
        />}
        {}
      </header>
    </div>
  );
}
export default Header;

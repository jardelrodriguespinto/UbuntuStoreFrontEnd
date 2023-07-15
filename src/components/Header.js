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
        navBar= {props.navBar}
        />}
        {}
      </header>
    </div>
  );
}
export default Header;

import NavBarComScroll from './NavBarComScroll';

function Header(props) {
  
  return (
    <div>
        {<NavBarComScroll
         logo = {props.logo}
        baixar={props.baixar}
        estabelecimentos={props.estabelecimentos}
        nossaMissao={props.nossaMissao}
        login= {props.login}
        navBar= {props.navBar}
        />}
        {}
     
    </div>
  );
}
export default Header;

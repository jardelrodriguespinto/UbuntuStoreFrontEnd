import "./header.css";
import { useNavigate } from "react-router-dom";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { BotaoBaixeApp } from "../BotaoBaixeApp";
import { menuItems } from "../MenuItems";
import BotaoLogin from "../BotaoLogin";
import HamburgerMenu from "../HamburgerMenu";

function Header(props) {
  let logo = false;

  if (props.logo === true) {
    logo = true;
  }

  let baixar = false;

  if (props.baixar === true) {
    baixar = true;
  }

  let login = false;
  if (props.login === true) {
    login = true;
  }
  let menu = false;
  if (props.menu === true) {
    menu = true;
  }
  let menuClassName = "menu";
  if (props.navClassName != null) {
    menuClassName = props.menuClassName;
  }

  /*redifinir a lógica do menuhamburguer*/
  const menuHamburguer = true;

  const navigate = useNavigate();

  let classeCss = "baixe-app";

  function irParaHome() {
    navigate("/");
  }

  return (
    <nav className="nav">
      <div className="nav-content">
        {logo && (
          <img
            className="ubuntu-store-logo"
            src={logoUbuntuStore}
            onClick={irParaHome}
            alt="Logo da empresa UbuntuStore"
          />
        )}
        {menu && (
          <ul className={menuClassName}>
            {menuItems.map((menu, index) => {
              return (
                <li className="menu-items" key={index}>
                  <a className="item" href={menu.url}>
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
        {baixar && <BotaoBaixeApp classeCss={classeCss} />}
        {login && <BotaoLogin />}
        {menuHamburguer && <HamburgerMenu />}
      </div>
    </nav>
  );
}
export default Header;

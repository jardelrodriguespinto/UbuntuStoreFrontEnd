import "./style/header.css";
import { useNavigate } from "react-router-dom";
import logoUbuntuStore from "../assets/img/logo-ubuntu-store.jpeg";
import { BotaoBaixeApp } from "./BotaoBaixeApp";
import { menuItems } from "./MenuItems";
import hamburgerMenuIcon from "../assets/img/hamburger-menu.png";
import { useState } from "react";
import SideBarMenu from "./SideBarMenu";
import BotaoLogin from "./BotaoLogin";

function NavBarComScroll(props) {
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
  let navBar = false;
  if (props.navBar === true) {
    navBar = true;
  }

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  function irParaHome() {
    navigate("/");
  }


  function renderizaSideBar() {
    /*Pensar na logica pra renderizar a navbar, por enquanto ela ficará amostra*/
    setSidebarOpen(!isSidebarOpen);
  }

  return (
      <nav>
        <div className="nav-content">
          {logo && (
            <img
              className="ubuntu-store-logo"
              src={logoUbuntuStore}
              onClick={irParaHome}
              alt="Logo da empresa UbuntuStore"
            />
          )}
          {navBar && <nav>
            <ul className="menu">
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
          </nav>}
          {baixar && <BotaoBaixeApp />}
          {login && <BotaoLogin/>}
          <img
            src={hamburgerMenuIcon}
            onClick={renderizaSideBar}
            alt="Menu do tipo hamburger"
            className="hamburger-menu-icon"
          />
          {isSidebarOpen && <SideBarMenu />}
        </div>
      </nav>
  );
}
export default NavBarComScroll;

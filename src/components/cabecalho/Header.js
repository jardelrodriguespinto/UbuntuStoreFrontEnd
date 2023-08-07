import "./header.modules.css";
import { useNavigate } from "react-router-dom";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { BotaoBaixeApp } from "../BotaoBaixeApp";
import { menuItems } from "../MenuItems";
import BotaoLogin from "../botoes/BotaoLogin";
import HamburgerMenu from "../HamburgerMenu";
import { AppBar,Toolbar, IconButton, Stack, Typography } from "@mui/material";

function NavBarComScroll(props) {
  let logo = false;

  if (props.logo === true) logo = true;

  let baixar = false;

  if (props.baixar === true) baixar = true;

  let login = false;

  if (props.login === true) login = true;

  const menuHamburguer = true;

  const navigate = useNavigate();

  const classeCss = "baixe-app";

  function irParaHome() {
    navigate("/");
  }

  return (
    <AppBar>
      

        <Toolbar>
        {logo && (
          <IconButton sx={{flexGrow:1}}>
            <img
              className="ubuntu-store-logo"
              src={logoUbuntuStore}
              onClick={irParaHome}
              alt="Logo da empresa UbuntuStore"
              
            />
          </IconButton>
          
        )}
        {/* <Typography variant="h5" color={"black"} fontWeight={"500"}>Ubuntu</Typography> */}
        </Toolbar>
        {/* <ul className="menu">
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
        {baixar && <BotaoBaixeApp classeCss={classeCss} />}
        {login && <BotaoLogin />}
        {menuHamburguer && <HamburgerMenu />}
       */}
    </AppBar>
  );
}
export default NavBarComScroll;

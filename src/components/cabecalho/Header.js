import "./header.modules.css";
import { useNavigate } from "react-router-dom";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import { BotaoBaixeApp } from "../BotaoBaixeApp";
import { menuItems } from "../MenuItems";
import BotaoLogin from "../botoes/BotaoLogin";
import HamburgerMenu from "../HamburgerMenu";
import { AppBar,Toolbar, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function NavBarComScroll(props) {
  const theme = useTheme();
  
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
    <AppBar position="static" style={{backgroundColor: theme.palette.primary.main}}>
        <Toolbar>
        {logo && (
          <IconButton  sx={{flexGrow:1, backgroundColor: ""} }>
            <img
              className="ubuntu-store-logo"
              src={logoUbuntuStore}
              onClick={irParaHome}
              alt="Logo da empresa UbuntuStore"
              
            />
          </IconButton>

        )}
        <BotaoLogin/>
        </Toolbar>
      
    </AppBar>
  );
}
export default NavBarComScroll;

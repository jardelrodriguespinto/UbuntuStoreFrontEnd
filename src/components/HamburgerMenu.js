import '../assets/style/hamburger-menu.css'

import { useState } from "react";
import hamburgerMenuIcon from '../assets/img/hamburger-menu.png'

function BotaoLogin() {
  
const [isSidebarOpen, setSidebarOpen] = useState(false);

function renderizaSideBar() {
  /*Pensar na logica pra renderizar a navbar, por enquanto ela ficará amostra*/
  setSidebarOpen(!isSidebarOpen);
}

  return (
        <img src={hamburgerMenuIcon}
          onClick={renderizaSideBar}
          alt="Menu do tipo hamburger"
          className="hamburger-menu-icon"/>
  );
}
export default BotaoLogin;





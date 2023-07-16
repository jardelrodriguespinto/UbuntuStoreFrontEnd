import '../assets/style/hamburger-menu.css';

import { useState } from "react";
import hamburgerMenuIcon from '../assets/img/hamburger-menu.png';
import SideBarMenu from "./SideBarMenu";

function HamburgerMenu() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <img
        src={hamburgerMenuIcon}
        onClick={() => setSidebarOpen(! isSidebarOpen)}
        alt="Menu do tipo hamburger"
        className="hamburger-menu-icon"
      />
      {isSidebarOpen && (
        <SideBarMenu
          className={`nav ${isSidebarOpen}` ? "nav-open" : "nav-closed"}
          hamburgerMenuIcon={hamburgerMenuIcon}
          isSidebarOpen={isSidebarOpen}
          
        />
      )}
    </>
  );
}

export default HamburgerMenu;

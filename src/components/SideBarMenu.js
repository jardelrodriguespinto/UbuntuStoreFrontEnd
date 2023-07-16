import '../assets/style/sidebar-menu.css';
import logoUbuntuStore from "../assets/img/logo-ubuntu-store.jpeg";

function SideBarMenu({ toggleSidebar }) {

  return (
    <div className="sidebar">
      <div className="cabecalho-sidebar">
        <img className="logo-ubuntu" src={logoUbuntuStore} alt="Logo da UbuntuStore"/>
        <button className="fechar-btn" onClick={toggleSidebar}>
          <span>x</span>
        </button>
      </div>
      <ul className="sidebar-menu">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  );
}
export default SideBarMenu;

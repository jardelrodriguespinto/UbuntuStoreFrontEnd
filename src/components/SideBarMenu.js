import '../assets/style/sidebar-menu.css';
import logoUbuntuStore from "../assets/img/logo-ubuntu-store.jpeg";
import { menuItems } from "./MenuItems";
import AccordionItem from "./AccordionItem";
import closeBtn from '../assets/img/close-button.png'


function SideBarMenu({ toggleSidebar }) {

  return (
    <div className="sidebar">
      <div className="cabecalho-sidebar">
        <img className="logo-ubuntu" src={logoUbuntuStore} alt="Logo da UbuntuStore"/>
        <img src={closeBtn} onClick={toggleSidebar} className='closed-btn' alt='Botão em formato de cruz para fechar a barra lateral' />
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((menu, index) => {
              return (
                <AccordionItem menuItems={menu} key={index} />
              );
            })}
      </ul>
      <button className="login-btn">
          <span>Login</span>
      </button>
      <button className="register-btn">
          <span>Cadastre-se</span>
      </button>
    </div>
  );
}
export default SideBarMenu;

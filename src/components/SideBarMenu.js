import '../assets/style/sidebar-menu.css';
import logoUbuntuStore from "../assets/img/logo-ubuntu-store.jpeg";
import { menuItems } from "./MenuItems";
import AccordionItem from "./AccordionItem";
import closeBtn from '../assets/img/close-button.png'
import BotaoLogin from './botoes/BotaoLogin';
import BotaoCadastre from './botoes/BotaoCadastre';


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
      <div className="botoes">
        <BotaoLogin className="btn-login"/>
        <BotaoCadastre className="btn-cadastre"/>
      </div>
    </div>
  );
}
export default SideBarMenu;

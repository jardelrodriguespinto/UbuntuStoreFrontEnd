import '../index.css';
import { useNavigate } from 'react-router-dom';
import logoUbuntuStore from '../assets/img/logo-ubuntu-store.jpeg';
import { BotaoBaixeApp } from './BotaoBaixeApp';
import { menuItems } from './MenuItems'
import hamburgerMenuIcon from '../assets/img/hamburger-menu.png'

function NavBarComScroll() {
  const navigate = useNavigate();

  function irParaHome() {
    navigate('/');
  }
  
  function renderizaSideBar(){
    /*Pensar na logica pra renderizar a navbar, por enquanto ela ficará amostra*/

  }

  return (
      <header className="primeiro-header">
        <nav>
          <div className="nav-content">
            <img className="ubuntu-store-logo" src={logoUbuntuStore} onClick={irParaHome} alt="Logo da empresa UbuntuStore" />
            <nav>
              <ul className="menu"> 
                {menuItems.map((menu, index) => {
                  return (
                    <li className="menu-items" key={index}>
                      <a className="item" href={menu.url}>{menu.title}</a>
                    </li>
                  );
                })}
              </ul> 
            </nav>            
            <BotaoBaixeApp/>
            <img src={hamburgerMenuIcon} onClick={renderizaSideBar} alt="Menu do tipo hamburger"  className="hamburger-menu-icon"/>
          </div>
        </nav>
      </header>
  );
}
export default NavBarComScroll;
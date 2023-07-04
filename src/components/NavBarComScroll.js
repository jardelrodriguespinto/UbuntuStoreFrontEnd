import '../index.css';
import { useNavigate } from 'react-router-dom';
import logoUbuntuStore from '../assets/img/logo-ubuntu-store.jpeg';
import { BotaoBaixeApp } from './BotaoBaixeApp';

function NavBarComScroll() {
  const navigate = useNavigate();

  function irParaHome() {
    navigate('/');
  }
  
  return (
      <header className="primeiro-header">
        <nav>
          <div className="nav-content">
            <img className="ubuntu-store-logo" src={logoUbuntuStore} onClick={irParaHome} alt="Logo da empresa UbuntuStore" />
            <BotaoBaixeApp/>
          </div>
        </nav>
      </header>
  );
}
export default NavBarComScroll;
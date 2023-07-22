import "./headerEstabelecimento.css";
import { useNavigate } from "react-router-dom";
import logoUbuntuStore from "../../../assets/img/logo-ubuntu-store.jpeg";
import HamburgerMenu from "../../HamburgerMenu";


function HeaderEstabelecimento(props) {
  let logo = false;

  if (props.logo === true) {
    logo = true;
  }

  /*redifinir a lógica do menuhamburguer*/
  const menuHamburguer = true;

  const navigate = useNavigate();


  function irParaHome() {
    navigate("/");
  }

  return (
    <nav className="nav">
      <div className="nav-content" id= "nav-estabelecimento">
        {logo && (
          <img
            className="ubuntu-store-logo"
            src={logoUbuntuStore}
            onClick={irParaHome}
            alt="Logo da empresa UbuntuStore"
          />
        )}
        {menuHamburguer && <HamburgerMenu />}
      </div>
    </nav>
  );
}
export default HeaderEstabelecimento;

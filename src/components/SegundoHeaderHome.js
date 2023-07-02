import '../index.css';
import { useNavigate } from 'react-router-dom';

function SegundoHeaderHome(){

    const navigate = useNavigate();

    function irParaPaginaEstabelecimento() {
        navigate('/estabelecimento');
    }

  return (
    <div>
      <header className="primeiro-header">
        <h1 className="tituloConhecaUbuntuStore">Conheça a UbuntuStore - Sua plataforma de interação entre eventos e estabelecimentos alimentícios</h1>
        <button className="seja-parceiro-btn" onClick={irParaPaginaEstabelecimento}>
          Seja nosso estabelecimento parceiro
        </button>
      </header>
    </div>
  );
}
export default SegundoHeaderHome;
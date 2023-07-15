import teste from '../assets/img/teste.png';
import "./style/botao-baixe-app.css"

export function BotaoBaixeApp(){
    return (
        <>
            <button className="baixe-app">
                <p>Baixe o App</p>
                <img src={teste} alt="Imagem da playstore para baixar o app da UbuntuStore" />
            </button>
        </>
    );
}

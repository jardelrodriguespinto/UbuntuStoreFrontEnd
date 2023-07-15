import teste from '../assets/img/teste.png';
import "../assets/style/botao-baixe-app.css"

export function BotaoBaixeApp(props){
    return (
        <>
            <button className={props.classeCss}>
                <p>Baixe o App</p>
                <img src={teste} alt="Imagem da playstore para baixar o app da UbuntuStore" />
            </button>
        </>
    );
}

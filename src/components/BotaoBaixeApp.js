import teste from '../assets/img/teste.png';

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

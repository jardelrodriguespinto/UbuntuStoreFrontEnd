import { React } from 'react';
import teste from '../assets/img/teste.png'

function TerceiraSecao(){
    return (
        <>
          <section className="terceira-secao">
              <p>
                  Baixe agora mesmo nosso aplicativo fácil de usar e personalizado para suas necessidades e desfrute de promoções exclusivas, rastreamento de pedidos em tempo real e suporte ao cliente de qualidade. Venha fazer parte do movimento de mudança social e tecnológica da UbuntuStore e alimente a união entre as pessoas.
              </p>
              <button className="baixe-app">
                  <p>Baixe o App</p>
                  <img src={teste} alt=""/>
              </button>
          </section>  
        </>
    );
}

export default TerceiraSecao;
import  React  from 'react';
import { BotaoBaixeApp } from './BotaoBaixeApp';

function TerceiraSecao(){
    return (
        <div>
          <section className="terceira-secao">
              <p className="baixe-app-texto">
                  Baixe agora mesmo nosso aplicativo fácil de usar e personalizado para suas necessidades e desfrute de promoções exclusivas, rastreamento de pedidos em tempo real e suporte ao cliente de qualidade. Venha fazer parte do movimento de mudança social e tecnológica da UbuntuStore e alimente a união entre as pessoas.
              </p>
              <div className="btn">
                <BotaoBaixeApp/>
              </div>
          </section>  
        </div>
    );
}

export default TerceiraSecao;
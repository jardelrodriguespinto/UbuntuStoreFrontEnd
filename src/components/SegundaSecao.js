import React from 'react';
import terra from '../assets/img/terra.png';
import tecnologia from '../assets/img/tecnologia.png';
import delivery from '../assets/img/delivery.png';

export function SegundaSecao(){
    return (
        <div className="segunda-secao">
          <div className="segunda-secao-content">
            <img src={terra} className="imagens-segunda-secao" alt="Terra" />
            <h2>Responsabilidade Social</h2>
            <p>
              Nós valorizamos a humanidade e a solidariedade, <br />
              construindo uma comunidade que se preocupa com o <br />
              bem-estar de todos.
            </p>
            <p>
              <span>Nosso compromisso com causas sociais.</span>
            </p>
          </div>
          <div className="segunda-secao-content">
            <img src={delivery} className="imagens-segunda-secao" alt="Entregas" />
            <h2>Entregas Confiáveis</h2>
            <p>
              Nossa equipe se empenha em garantir que seus produtos     
              cheguem com rapidez e em perfeitas condições.
              Gerando excelência na entrega.
            </p>
            <p>
              <span>O que nos difere nas entregas?</span>
            </p>
          </div>
          <div className="segunda-secao-content">
            <img src={tecnologia} className="imagens-segunda-secao" alt="Tecnologia" />
            <h2>Tecnologia e Comunidade</h2>
            <p>
              Criamos um aplicativo personalizado e fácil de usar, para
              que você possa desfrutar de uma nova forma de comprar 
              alimentos online.
            </p>
            <p>
              <span>A tecnologia que transforma vidas</span>
            </p>
          </div>
        </div>
      );
}
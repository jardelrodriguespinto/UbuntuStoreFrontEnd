import '../App.css';
import  React from 'react';
import image4 from '../assets/img/image4.jpg'
import criancaComendo from '../assets/img/crianca-comendo.jpg'
import image3 from '../assets/img/image3.jpg'

function PrimeiraSecao(){
    return (
        <div>
            <section className="primeira-secao">
              <div className="introducao">
                  <h2> UbuntuStore - Alimente a união, construa a comunidade</h2>
                  <p>
                      Bem-vindo à <span>UbuntuStore</span>, a plataforma de comércio eletrônico focada em alimentos que tem como objetivo ir além da simples venda de produtos.
                      Nós nos dedicamos a conectar as pessoas e fortalecer as comunidades, apoiando causas sociais e melhorando a vida de quem vive nas periferias.
                  </p>
              </div>
              <div className="main-content  content-1">
                  <p>
                      Ao escolher a <span>UbuntuStore</span>, você está escolhendo mais do que apenas uma loja online de alimentos.
                      Nós estamos construindo uma comunidade de clientes, parceiros e estabelecimentos que compartilham os valores de humanidade,
                      solidariedade e responsabilidade social. Acreditamos que a tecnologia pode ser usada para aproximar as pessoas, não para afastá-las, e por isso,
                      criamos um aplicativo fácil de usar, seguro e personalizado para suas necessidades. 
                  </p>
                  <img className="img-refeicao" src={image3} alt="Pessoa preparando refeição"/>    
              </div>
              <div className="main-content content-2">
                  <p>
                      Ao utilizar o aplicativo da <span>UbuntuStore</span>, você tem acesso a promoções exclusivas, opções de pagamento flexíveis,
                      um suporte ao cliente de qualidade, tudo isso enquanto apoia causas sociais e contribui para a melhoria da vida de quem mais precisa.
                        Junte-se a nós e alimente a união enquanto desfruta de alimentos deliciosos e nutritivos, fornecidos pelos melhores estabelecimentos da sua região.
                  </p>
                  <img className="img-refeicao" src={image4} alt="Pessoa preparando refeição"/>
              </div>
              <div className="main-content content-3">
                  <p className="ultimo-paragrafo">
                      Esperamos que você se sinta inspirado e motivado a fazer parte da nossa comunidade. Afinal, a <span>UbuntuStore</span> não é apenas uma loja de alimentos,
                      mas um movimento de mudança social e tecnológica. Venha conosco nessa jornada e descubra uma nova forma de comprar alimentos online.
                  </p>
                  <img className="img-refeicao" src={criancaComendo} alt="Pessoa preparando refeição"/>
              </div>
            <br/>
          </section>
        </div>
    );
}

export default PrimeiraSecao;
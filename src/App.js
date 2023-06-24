import './App.css';
import React, { useEffect } from 'react';
import criancaComendo from './assets/img/crianca-comendo.jpg'
import image2 from './assets/img/image2.jpg'
import image3 from './assets/img/image3.jpg'
import image4 from './assets/img/image4.jpg'
import place from './assets/img/place.png'
import predio from './assets/img/predio.png'
import tellphone from './assets/img/tellphone.png'
import teste from './assets/img/teste.png'
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <main>
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
          <section className="segunda-secao">
              <h3>Vantagens de ser nosso parceiro</h3>
              <ul>
                  <li>Promoções exclusivas e benefícios para clientes parceiros.</li>
                  <li>Promoções exclusivas e benefícios para clientes parceiros.</li>
                  <li>Promoções exclusivas e benefícios para clientes parceiros.</li>
                  <li>Promoções exclusivas e benefícios para clientes parceiros.</li>
                  <li>Promoções exclusivas e benefícios para clientes parceiros.</li>
                  <li>Promoções exclusivas e benefícios para clientes parceiros.</li>
                  <li>Promoções exclusivas e benefícios para clientes parceiros.</li>
              </ul>
          </section>
          <section className="terceira-secao">
              <p>
                  Baixe agora mesmo nosso aplicativo fácil de usar e personalizado para suas necessidades e desfrute de promoções exclusivas, rastreamento de pedidos em tempo real e suporte ao cliente de qualidade. Venha fazer parte do movimento de mudança social e tecnológica da UbuntuStore e alimente a união entre as pessoas.
              </p>
              <button className="baixe-app">
                  <p>Baixe o App</p>
                  <img src={teste} alt=""/>
              </button>
          </section>
      </main>
      <footer>
          <div className="rodape1">
              <div className="rodape1-content-1">
                  <h4>Contato</h4>
                  <div className="rodape-container">
                      <img className="icones" src={place} alt="Localização"/>
                      <p>Rua Fictícia Das Quantas, Bairro Alegria, SP, 88888-000</p>
                  </div>
                  <div className="rodape-container">
                      <img className="icones" src={tellphone} alt="Telefone"/>
                      <p>(011) 91748-1198</p>
                  </div>                    
                  <div className="rodape-container">
                      <img className="icones" src={predio} alt="Prédio"/>
                      <p>08:00 às 18:00 Segunda-Feira - Sexta-Feira </p>
                  </div>
                  <div className="rodape-container">
                      <button className="baixe-app btn">
                          <p>Baixe o App</p>
                          <img src={teste} alt=""/>
                      </button>
                  </div>
                </div>
              <div className="rodape1-content-2">
                  <h4>Nossa Localização</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.9723886682914!2d-49.65789112503068!3d-27.220016676465214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dfb8540215281f%3A0xbea0080b3b5c66b8!2sR.%20Imperatriz%20Leopoldina%20-%20Canoas%2C%20Rio%20do%20Sul%20-%20SC%2C%2089164-090!5e0!3m2!1spt-BR!2sbr!4v1681575651699!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    loading="eager"
                    referrerPolicy="no-referSrer-when-downgrade"
                    ></iframe>
              </div>
            </div>
      </footer>
      <footer className="footer-container-2">
          <div className="rodape2">
              <p>&copy;UbuntuStore - 2023</p>
          </div>
      </footer>
    </>
  );
}

export default App;

import '../assets/style/primeira-secao.css';
import  React from 'react';

function PrimeiraSecao(){
    return (
        <section className="primeira-secao">
            <div className="introducao">
                <h2>Alimente a união</h2>
                <p>
                    Bem-vindo à <span>UbuntuStore</span>, a plataforma de comércio eletrônico focada em alimentos que tem como objetivo ir além da simples venda de produtos.
                    Nós nos dedicamos a conectar as pessoas e fortalecer as comunidades, apoiando causas sociais e melhorando a vida de quem vive nas periferias.
                </p>
            </div>
        </section>
    );
}

export default PrimeiraSecao;
import React  from 'react';
import place from '../assets/img/place.png'
import predio from '../assets/img/predio.png'
import tellphone from '../assets/img/tellphone.png'

function footer(){
    return (
        <div>
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
                        </div>
                    </div>
            </footer>
            <footer className="footer-container-2">
                <div className="rodape2">
                    <p>&copy;UbuntuStore - 2023</p>
                </div>
            </footer>
        </div>
    );
}

export default footer;
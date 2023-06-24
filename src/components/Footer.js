import { React } from 'react';
import place from '../assets/img/place.png'
import predio from '../assets/img/predio.png'
import tellphone from '../assets/img/tellphone.png'
import teste from '../assets/img/teste.png'

function Footer(){
    return (
        <>
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

export default Footer;
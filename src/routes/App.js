import '../assets/style/index.css';
import React from 'react';  
import Header from '../components/cabecalho/Header';
import PrimeiraSecao from '../components/PrimeiraSecao';
import TerceiraSecao from '../components/TerceiraSecao';
import Footer from '../components/Footer';
import { SegundaSecao } from '../components/SegundaSecao';

function App() {
  return (
    <>
      <Header 
      logo ={true}
      baixar = {true}
      login = {false}
      navBar= {true}/>
      <main>
        <PrimeiraSecao/>
        <SegundaSecao/>
        <TerceiraSecao/>  
      </main>
      <Footer/>
    </>
  );
}

export default App;
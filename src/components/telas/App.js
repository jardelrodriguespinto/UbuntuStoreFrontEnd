import '../../assets/style/index.css';
import React from 'react';  
import Header from '../cabecalho/Header';
import PrimeiraSecao from '../PrimeiraSecao';
import TerceiraSecao from '../TerceiraSecao';
import Footer from '../Footer';
import { SegundaSecao } from '../SegundaSecao';

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
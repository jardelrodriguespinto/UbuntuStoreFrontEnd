import '../index.css';
import React from 'react';  
import Header from '../components/Header';
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
      login = {true}/>
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
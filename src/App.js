import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import PrimeiraSecao from './components/PrimeiraSecao';
import SegundaSecao from './components/SegundaSecao';
import TerceiraSecao from './components/TerceiraSecao';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
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

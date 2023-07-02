import '../index.css';
import React from 'react';  
import Header from '../components/Header';
import PrimeiraSecao from '../components/PrimeiraSecao';
import SegundaSecao from '../components/SegundaSecao';
import TerceiraSecao from '../components/TerceiraSecao';
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <Header isHomePage={true}/>
      <main>
        <PrimeiraSecao/>
        <SegundaSecao/>  
        <TerceiraSecao/>  
      </main>
      <Footer/>
    </div>
  );
}

export default App;
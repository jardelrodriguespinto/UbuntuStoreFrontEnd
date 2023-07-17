import React from 'react';
import Header from '../components/cabecalho/Header';
import Footer from '../components/Footer';
import PrimeiraSecao from '../components/PrimeiraSecao';

function HomeEstabelecimento() {
  return (
    <div>
      <Header 
      logo={true}
      />
      
      <Footer />
    </div>
  );
}

export default HomeEstabelecimento;

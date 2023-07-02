import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SegundaSecao from '../components/SegundaSecao';

function Estabelecimento() {
  return (
    <div>
      <Header isHomePage={false}/>
      <SegundaSecao/>
      <Footer />
    </div>
  );
}

export default Estabelecimento;

import React from 'react';
import Header from '../../cabecalho/Header';
import Footer from '../../Footer';
import PrimeiraSecao from '../../PrimeiraSecao';

function NossaMissao() {
  return (
    <div>
      <Header
      logo={true}
      baixar={true}
      />
      <Footer />
    </div>
  );
}

export default NossaMissao;

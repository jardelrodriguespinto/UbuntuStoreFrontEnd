import React from 'react';
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import "./minhaLoja.css"


function MinhaLoja() {
  return (
    <div >
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
          <h1>
            Home
          </h1>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MinhaLoja;

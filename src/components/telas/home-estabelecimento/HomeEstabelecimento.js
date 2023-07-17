import React from "react";
import "./home-estabelecimento.css";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import Footer from "../../Footer";
import BarraLateral from "../../barra-lateral/BarraLateral";

function HomeEstabelecimento() {
  return (
    <div >
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main></main>
      </div>

      <Footer />
    </div>
  );
}

export default HomeEstabelecimento;

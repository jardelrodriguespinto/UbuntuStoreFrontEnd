import React from "react";
import "./home-estabelecimento.modules.css";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import Footer from "../../Footer";
import BarraLateral from "../../barra-lateral/BarraLateral";
import BotaoLogin from "../../botoes/BotaoLogin";

function HomeEstabelecimento() {
  return (
    <div >
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <main>
          <BotaoLogin/>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default HomeEstabelecimento;

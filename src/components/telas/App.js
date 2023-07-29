import "../../assets/style/index.css";
import React, { useState } from "react";
import Header from "../cabecalho/Header";
import PrimeiraSecao from "../PrimeiraSecao";
import TerceiraSecao from "../TerceiraSecao";
import Footer from "../Footer";
import { SegundaSecao } from "../SegundaSecao";
import { Button, Icon, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";


function App() {
  const [format,setFormat] = useState([])

  const handleOnChange = () =>{
    console.log()
  }
  return (
    <>
      <Header logo={true} baixar={true} login={false} navBar={true} />
      <main>
        <PrimeiraSecao />
        <SegundaSecao />
        <TerceiraSecao />
      </main>
      <Footer />
    </>
  );
}

export default App;

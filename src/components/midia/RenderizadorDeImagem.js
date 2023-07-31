import React, { useEffect, useState } from "react";
import logoUbuntuStore from "../../assets/img/logo-ubuntu-store.jpeg";
import "./renderizadorDeImagem.css";

const RenderizadorDeImagem = (props) => {
  const [imagem, setImagem] = useState();
useEffect(()=>{
    setImagem(props.imagem)
})
  if (imagem != null) {
    return (
      <img className="miniatura"
        src={`data:image/jpeg;base64,${props.imagem}`}
      />
    );
  } else {
    return (
      <img
      className=""
        src={logoUbuntuStore}
        width="200px"
        height="100%"
      />
    );
  }
};

function arrayBufferToBase64(byteArray) {
  let binary = "";
  const bytes = new Uint8Array(byteArray);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
export default RenderizadorDeImagem;

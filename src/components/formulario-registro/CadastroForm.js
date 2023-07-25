import "./cadastro-form.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BotaoCadastre from "../botoes/BotaoCadastre";

function CadastroForm() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");
  const [responseState, setResponseState] = useState(null);

  const getToken = async () => {
    try {
      const axiosInstance = axios.create({});
      const response = await axiosInstance.post(
        "http://localhost:7200/api/v1/aut/autenticar",
        {
          email: usuario,
          password: senha,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log( response.data.token);
      console.log(" resposta: " + response.data.estabelecimentoId);
      console.log(localStorage.setItem("token" ,"Bearer " + response.data.token));
      console.log(localStorage.setItem("estabelecimentoId" ,response.data.estabelecimentoId));
      setResponseState(response.data);
      const { token } = response.data.token;
      console.log(token);
     
      console.log(localStorage.getItem("token"));
      navigate("/estabelecimentos/inicio");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="formulario"
      onSubmit={(e) => {
        e.preventDefault();
        getToken();
      }}
    >
      <div className="form-img-backgroud">
        <h1>Ubuntu</h1>
      </div>
      <div className="campos">
        <input
          className="inputEmail"
          placeholder="Usuario"
          minLength={3}
          name="usuario"
          type="text"
          maxLength={50}
          value={usuario}
          required
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          className="inputSenha"
          placeholder="Senha"
          type="password"
          required
          minLength={3}
          maxLength={30}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          className="inputSenhaRepetida"
          placeholder="Repita sua senha"
          type="password"
          required
          minLength={3}
          maxLength={30}
          value={senhaRepetida}
          onChange={(e) => setSenhaRepetida(e.target.value)}
        />
      </div>
      <BotaoCadastre className="cadastro-btn"/>
    </form>
  );
}

export default CadastroForm;

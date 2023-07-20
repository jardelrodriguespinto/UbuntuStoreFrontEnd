import "./loginForm.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ubuntuIp } from "../../propriedades.js";
import Login from "../telas/login/Login";

function LoginForm() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [responseState, setResponseState] = useState(null); // Novo estado para armazenar a resposta do Axios
  
  const getToken = async () => {
    try {
      const axiosInstance = axios.create({
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const response = await axiosInstance.post(
        "http://localhost:7200/api/v1/aut/autenticar",
        {
          email: "fernando@gmail.com",
          password: "123"
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Armazene a resposta em um estado
      setResponseState(response.data);

      console.log(responseState); // Agora, logue o estado em vez da resposta diretamente

      const { token } = response.data.token;
      localStorage.setItem('token', token);
      console.log(localStorage.getItem('token'));
      navigate("/estabelecimentos/inicio");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="formulario">
      <div className="form-img-backgroud">
        <h1>Ubuntu</h1>
      </div>
      <div className="campos">
        <input
          className="inputEmail"
          placeholder="Usuario"
          name="usuario"
          type="text"
          maxLength={50}
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          className="inputSenha"
          placeholder="Senha"
          type="password"
          maxLength={30}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <button className="botao-login" onClick={getToken}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
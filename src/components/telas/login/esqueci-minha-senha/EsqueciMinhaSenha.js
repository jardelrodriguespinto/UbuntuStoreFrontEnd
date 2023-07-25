import react, { useState } from "react";
import "./esqueciasenha.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EsqueciminhaSenha() {
  let [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const navegar = useNavigate();

  const [responseState, setResponseState] = useState(null); // Novo estado para armazenar a resposta do Axios

  const enviar = () => {};
  const esqueciMinhaSenha = async () => {
    try {
      setStep(2);
      const axiosInstance = axios.create({});
      const response = await axiosInstance.post(
        "http://localhost:7200/api/v1/aut/esqueciasenha",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.mensagem);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {
        <div className="tela-formulario">
          {step === 1 && (
            <div>
              <form>
                <p className="descricao">
                  Para recuperar sua senha, precisamos enviar um email de
                  confirmação para seu email. Por favor, digite seu email no
                  campo abaixo
                </p>
                <label for="email"></label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
                <button
                  className="botao-login"
                  onClick={() => {
                    esqueciMinhaSenha();
                  }}
                >
                  Enviar
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="descricao">
                Email de confirmação foi enviado para **********@gmail.com
              </p>
              <button className="botao-login" onClick={() =>{
                navegar("/login")
              }}>Voltar</button>
            </div>
          )}
        </div>
      }
    </>
  );
}

export default EsqueciminhaSenha;

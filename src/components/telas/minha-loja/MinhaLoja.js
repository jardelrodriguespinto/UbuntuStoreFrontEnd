import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import "./minhaLoja.css";
import axios from "axios";
import { ubuntuIp } from "../../../propriedades";
import { useNavigate } from "react-router-dom";
import { propiedadesDoTema } from "../../../utils/tema";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState, useEffect } from "react";
import {
  TextField,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  Button,
  DialogActions,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ClockPicker } from "@mui/lab";
import { parseISO, format } from "date-fns";

function MinhaLoja() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [nome, setNome] = useState("");
  const [precoMinimo, setPrecoMinimo] = useState("");
  const [tempoDePreparo, setTempoDePreparo] = useState("");
  const [calorias, setCalorias] = useState("");
  const [valorMinimo, setValorMinimo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [inicioExpediente, inicioExpedienteSetter] = useState(null);
  const [fimExpediente] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [imagem, setPreviewImage] = useState(null);
  const tema = createTheme(propiedadesDoTema);

  const id = localStorage.getItem("estabelecimentoId");
  const enviarFormulario = async () => {
    let data = new Date(inicioExpediente)
    let localTimeString= "".concat(data.getHours()).concat(":").concat(data.getMinutes());

    console.log(localTimeString)
    
    console.log()
       let fimE;
    const resposta = await axios.put(
      ubuntuIp.toString() + "/estabelecimento/telas/minhaloja",
      {
        idDeEstabelecimento: id,
        nome: nome,
        image: imagem,
        descricao: descricao,
        endereco: endereco,
        telefone: telefone,
        cep: cep,
        valorMinimo: valorMinimo,
        inicioExpediente: inicioExpediente,
        fimExpediente: fimExpediente
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  };

  const handleInicioExpedienteChange = (newTime) => {
    console.log(newTime);// inicioExpedienteSetter(newTime);
  };

  const setInicioExpedienteInicial = (e) => {
    {
      console.log(e)
      let horas = e.split(":");
      const dateTime = new Date(1111, 11, 11, horas[0], horas[1], horas[2]);

      inicioExpedienteSetter(dateTime);

      // const parsedDate = parseISO(javaLocalDate);
    }
  };

  useEffect(() => {
    obterTela();
  }, []);

  const obterTela = async () => {
    const resposta = await axios.get(
      ubuntuIp.toString() + "/estabelecimento/telas/minhaloja",
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setNome(resposta.data.nome);
    setValorMinimo(resposta.data.valorMinimo);
    setEndereco(resposta.data.endereco);
    setTelefone(resposta.data.telefone);
    handleInicioExpedienteChange(resposta.data.inicioExpediente);
    //1: transformar data do tempo LocalTime
    // setFimExpediente(resposta.data.fimExpediente);
    setInicioExpedienteInicial(resposta.data.fimExpediente);
    setCep(resposta.data.cep);
    setDescricao(resposta.data.descricao);
  };
  return (
    <ThemeProvider theme={tema}>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <Stack direction={"column"} alignItems={"center"}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              enviarFormulario();
            }}
          >
            <Stack fullWidth direction={"column"}>
              <TextField
                fullWidth
                type="file"
                variant="outlined"
                margin="normal"
                name="imagem"
                accept="image/*"
                // onChange={(e) => {
                //   setImagem(e);
                // }}
              />
              <TextField
                label="Nome do estabeleciento"
                variant="outlined"
                margin="normal"
                name="nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
              <TextField
                label="Valor mínimo por pedido"
                variant="outlined"
                type="number"
                width="50%"
                margin="normal"
                name="valorMinimo"
                value={valorMinimo}
                onChange={(e) => {
                  setValorMinimo(e.target.value);
                }}
              />
              <TextField
                label="Telefone p/ contato"
                variant="outlined"
                fullWidth
                margin="normal"
                name="telefone"
                value={telefone}
                onChange={(e) => {
                  setTelefone(e.target.value);
                }}
              />
              <TextField
                label="Endereco"
                variant="outlined"
                fullWidth
                margin="normal"
                name="endereco"
                value={endereco}
                onChange={(e) => {
                  setEndereco(e.target.value);
                }}
              />
              <TextField
                label="Cep"
                variant="outlined"
                fullWidth
                margin="normal"
                name="cep"
                value={cep}
                onChange={(e) => {
                  setCep(e.target.value);
                }}
              />
              <TextField
                label="Descrição"
                variant="outlined"
                fullWidth
                margin="normal"
                name="descricao"
                value={descricao}
                onChange={(e) => {
                  setDescricao(e.target.value);
                }}
              />
              <Stack direction={"row"}></Stack>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  value={inicioExpediente}
                  label="Inicio de Expediente"
                  onChange={(e) => {
                    console.log(e)
                    handleInicioExpedienteChange(e);
                  }}
                />

                <TimePicker value={fimExpediente} label="Fim de Expediente" />
              </LocalizationProvider>
            </Stack>

            <DialogActions>
              <Button
                onClick={() => {
                  enviarFormulario();
                  navigate("/estabelecimentos/minhaloja");
                }}
                color="primary"
              >
                <Typography textTransform={"none"}>Cancelar</Typography>
              </Button>
              <Button type="submit" variant="contained" color="primary">
                <Typography textTransform={"none"}>Enviar</Typography>
              </Button>
            </DialogActions>
          </form>
        </Stack>
        <Typography color={"black"}></Typography>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default MinhaLoja;

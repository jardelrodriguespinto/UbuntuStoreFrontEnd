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
  Box,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";

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
  const [openexperienteDialog, setOpenhorarioDialog] = useState("");
  const [horaInicioExpediente, setHoraInicioExpediente] = useState(6);
  const [minutosInicioExpediente, setMinutosInicioExpediente] = useState(6);
  const [horaFimExpediente, setHoraFimExpediente] = useState(6);
  const [minutosFimExpediente, setMinutosFimExpediente] = useState(6);
  const [horaInicioExpedienteInicial, setHoraInicioExpedienteInicial] = useState(6);
  const [minutosInicioExpedienteInicial, setMinutosInicioExpedienteInicial] = useState(6);
  const [horaFimExpedienteInicial, setHoraFimExpedienteInicial] = useState(6);
  const [minutosFimExpedienteInicial, setMinutosFimExpedienteInicial] = useState(6);

  const [descricao, setDescricao] = useState("");
  const [imagem, setPreviewImage] = useState(null);
  const [open, setOpen] = useState(false);
  const tema = createTheme(propiedadesDoTema);

  const id = localStorage.getItem("estabelecimentoId");
  const enviarFormulario = async () => {

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
        valorMinimo: valorMinimo
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  };

  const handleHoraInicioExpedienteChange = (event) => {
    const newValue = event.target.value;
    if (newValue >= 0 && newValue <= 24) {
      setHoraInicioExpediente(newValue);
    }
  };
  const enviarHorario = async () => {
    let inicioExpediente = new Date();
    inicioExpediente.setHours(horaInicioExpediente);
    inicioExpediente.setMinutes(minutosInicioExpediente);
    let fimExpediente = new Date();
    fimExpediente.setHours(horaFimExpediente);
    fimExpediente.setMinutes(minutosFimExpediente);

    const resposta = await axios.put(
      ubuntuIp.toString() + "/estabelecimento/alterarhorariofuncionamento",
      {
        inicioExpediente: inicioExpediente,
        fimExpediente: fimExpediente,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if(resposta.status == 200){
        setHoraInicioExpedienteInicial(horaInicioExpediente)
        setMinutosInicioExpedienteInicial(minutosInicioExpediente)
        setHoraFimExpedienteInicial(horaFimExpediente)
        setMinutosFimExpedienteInicial(minutosFimExpediente)
        handleClose()
    }
  };
  



  useEffect(() => {
    obterTela();
  }, []);

  const handleOpen = () => {
    setOpenhorarioDialog(true);
  };
  const handleClose = () => {
    setOpenhorarioDialog(false);
  };
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

   
    let inicioExpedienteString = resposta.data.inicioExpediente;
    setHoraInicioExpedienteInicial(resposta.data.inicioExpediente.split(":")[0]);
    setHoraInicioExpediente(resposta.data.inicioExpediente.split(":")[0]);

    setMinutosInicioExpediente(resposta.data.inicioExpediente.split(":")[1]);
    setMinutosInicioExpedienteInicial(resposta.data.inicioExpediente.split(":")[1]);

    setHoraFimExpediente(resposta.data.fimExpediente.split(":")[0]);
    setHoraFimExpedienteInicial(resposta.data.fimExpediente.split(":")[0]);
    
    setMinutosFimExpediente(resposta.data.fimExpediente.split(":")[1]);
    setMinutosFimExpedienteInicial(resposta.data.fimExpediente.split(":")[1]);

    setCep(resposta.data.cep);
    setDescricao(resposta.data.descricao);
  };
  return (
    <ThemeProvider theme={tema}>
      <Dialog open={openexperienteDialog} onClose={handleClose}>
        <DialogTitle marginBottom={"20px"}>
          Alterar horario de trabalho
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction={"column"}>
              <Stack direction={"row"}>
                <Box>
                  <Typography>Hora de Início de Trabalho:</Typography>
                  <TextField
                    type="number"
                    value={horaInicioExpediente}
                    onChange={(e)=>{
                      setHoraInicioExpediente(e.target.value)
                    }}
                  />
                </Box>
                <Box>
                  <Typography>Minutos inicio Trabalho</Typography>
                  <TextField
                  type="number"
                    value={minutosInicioExpediente}
                    onChange={(e) => {
                      setMinutosInicioExpediente(e.target.value);
                    }}
                  />
                </Box>
              </Stack>

              <Stack direction={"row"}>
                <Box>
                  <Typography>Hora fim Expediente</Typography>
                  <TextField
                  type="number"
                    value={horaFimExpediente}
                    onChange={(e) => {
                      setHoraFimExpediente(e.target.value);
                    }}
                  />
                </Box>
                <Box>
                  <Typography>Minutos fim Expediente</Typography>
                  <TextField
                  type="number"
                    value={minutosFimExpediente}
                    onChange={(e) => {
                      setMinutosFimExpediente(e.target.value);
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <Typography textTransform={"none"}>Cancelar</Typography>
          </Button>
          <Button
            onClick={enviarHorario}
            type="submit"
            variant="contained"
            color="primary"
          >
            <Typography textTransform={"none"}>Enviar</Typography>
          </Button>
        </DialogActions>
      </Dialog>

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
              <Stack direction={"row"}>
                <Typography color={"black"}>
                  {" "}
                  Horario de trabalho: das {horaInicioExpedienteInicial}:{minutosInicioExpedienteInicial} até as {horaFimExpedienteInicial}:{minutosFimExpedienteInicial}
                </Typography>
                <Button onClick={handleOpen}>
                  <Typography> Editar</Typography>
                </Button>
              </Stack>
              :
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

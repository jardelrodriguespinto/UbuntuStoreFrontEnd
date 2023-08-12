import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../propriedades";
import ItemCardapio from "../../item-cardapio/ItemCardapio";
import "./cardapio.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  Button,
  ButtonGroup,Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import { propiedadesDoTema } from "../../../utils/tema";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Cardapio() {
  const [lista, setLista] = useState([]);
  const tema = createTheme(propiedadesDoTema);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    imagem: null,
    descricao: '',
    contemGluten: false,
    vegetariano: false,
    vegano: false,
    tempoDeEntrega: '',
    tempoDePreparo: '',
    calorias: '',
    disponivel: false,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    setOpen(false);
  };
  let navegar = useNavigate();
  const itemCardapioNotify = async () => {
    try {
      const response = await axios.post(
        ubuntuIp + "/estabelecimento/telas/listarprodutos",
        null,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      setLista(response.data.lista);
    } catch (error) {
      if (error.response.status == 402) {
      }
      console.log(error);
    }
  };
  useEffect(() => {
    itemCardapioNotify();
  }, []);

  return (
    <ThemeProvider theme={tema}>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
        <Stack direction={"column"} alignItems={"center"}>
          <Box>
            <Box>
              <Typography
                className="titulo-pagina"
                color={"black"}
                variant="h3"
              >
                Cardapio
              </Typography>
            </Box>
            <ButtonGroup fullWidth alignItems="center">
              <Button startIcon={<AddCircleOutlineIcon/>}  variant="contained" onClick={handleOpen}>
                
                <Typography textTransform={"none"}  >
                  Adicionar Produto
                </Typography>
              </Button>
            </ButtonGroup>
            <Grid
              container
              className="grade-cardapio"
              xs={12}
              sx={{ gap: "15px", margin: "50px" }}
            >
              {lista.map((i) => {
                return <ItemCardapio props={i}></ItemCardapio>;
              })}
            </Grid>
          </Box>
        </Stack>
      </div>

      <Footer />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Formulário</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              margin="normal"
              name="nome"
              value={formData.nome}
              // onChange={handleChange}
            />
            <TextField
              label="Preço"
              variant="outlined"
              fullWidth
              margin="normal"
              name="preco"
              value={formData.preco}
              // onChange={handleChange}
            />
            <TextField
              label="Descrição"
              variant="outlined"
              fullWidth
              margin="normal"
              name="descricao"
              value={formData.descricao}
              // onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="contemGluten"
                  checked={formData.contemGluten}
                  // onChange={handleChange}
                />
              }
              label="Contém Glúten"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="vegetariano"
                  checked={formData.vegetariano}
                  // onChange={handleChange}
                />
              }
              label="Vegetariano"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="vegano"
                  checked={formData.vegano}
                  // onChange={handleChange}
                />
              }
              label="Vegano"
            />
            <TextField
              label="Tempo de Entrega"
              variant="outlined"
              fullWidth
              margin="normal"
              name="tempoDeEntrega"
              value={formData.tempoDeEntrega}
              // onChange={handleChange}
            />
            <TextField
              label="Tempo de Preparo"
              variant="outlined"
              fullWidth
              margin="normal"
              name="tempoDePreparo"
              value={formData.tempoDePreparo}
              // onChange={handleChange}
            />
            <TextField
              label="Calorias"
              variant="outlined"
              fullWidth
              margin="normal"
              name="calorias"
              value={formData.calorias}
              // onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="disponivel"
                  checked={formData.disponivel}
                  // onChange={handleChange}
                />
              }
              label="Disponível"
            />
            <Button type="submit" color="primary">
              Enviar
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default Cardapio;

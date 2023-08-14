import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { ubuntuIp } from "../../../propriedades";
import ItemCardapio from "../../item-cardapio/ItemCardapio";
import "./cardapio.css";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  Button,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { propiedadesDoTema } from "../../../utils/tema";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Cardapio() {
  const [lista, setLista] = useState([]);
  const tema = createTheme(propiedadesDoTema);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [nomeProduto, setNomeProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [tempoDePreparo, setTempoDePreparo] = useState("");
  const [calorias, setCalorias] = useState("");
  const [disponivel, setDisponivel] = useState(true);
  const [contemGluten, setContemGluten] = useState(false);
  const [vegetariano, setVegetariano] = useState(false);
  const [vegano, setVegano] = useState(false);
  const [descricao, setDescricao] = useState("");

  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const [previewImage, setPreviewImage] = useState(null);
  const setImagem = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const navegar = useNavigate();

  const adicionarProduto = async () => {
    const estabelecimentoId = localStorage.getItem("estabelecimentoId");
    try {
      console.log({
        idDoEstabelecimento: estabelecimentoId,
        nome: nomeProduto,
        preco: precoProduto,
        imagem: null,
        descricao: descricao,
        contemGluten: contemGluten,
        vegetariano: vegetariano,
        vegano: vegano,
        tempoDeEntrega: null,
        tempoDePreparo: tempoDePreparo,
        calorias: calorias,
        disponivel: disponivel,
      });
      const axiosInstance = axios.create({});
      const response = await axiosInstance.post(
        "http://localhost:7200/produto/adicionar",
        {
          idDoEstabelecimento: estabelecimentoId,
          nome: nomeProduto,
          preco: precoProduto,
          imagem: null,
          descricao: descricao,
          contemGluten: contemGluten,
          vegetariano: vegetariano,
          vegano: vegano,
          tempoDeEntrega: null,
          tempoDePreparo: tempoDePreparo,
          calorias: calorias,
          disponivel: disponivel,
        },
        {
          headers: {
            "Content-Type": "application/json",

            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setOpen(false);
      setNomeProduto("");
      setPrecoProduto("");
      setTempoDePreparo("");
      setCalorias("");
      setDisponivel(true);
      setContemGluten(false);
      setVegetariano(false);
      setVegano(false);
      setDescricao("");
      handleClose();
    } catch (error) {
      console.error(error);
      if (error.response.status === 402) {
        navegar("/login");
      }
    }
  };
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
      setLista(response.data.lista);
    } catch (error) {
      if (error.response.status === 402) {
        navegar("/login");
      }
      console.log(error);
    }
  };
  useEffect(() => {
    itemCardapioNotify();
  }, []);
  const callbackEdicaoProduto = (id) => {
    
  };
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
              <Button
                startIcon={<AddCircleOutlineIcon />}
                variant="contained"
                onClick={handleOpen}
              >
                <Typography textTransform={"none"}>
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
        <DialogTitle>Adicionar Item</DialogTitle>
        <DialogContent>
          <TextField
            type="file"
            variant="outlined"
            fullWidth
            margin="normal"
            name="imagem"
            accept="image/*"
            onChange={(e) => {
              setImagem(e);
            }}
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              adicionarProduto();
            }}
          >
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              margin="normal"
              name="nome"
              value={nomeProduto}
              onChange={(e) => {
                setNomeProduto(e.target.value);
              }}
            />
            <TextField
              label="Preço"
              variant="outlined"
              type="number"
              fullWidth
              margin="normal"
              name="preco"
              value={precoProduto}
              onChange={(e) => {
                setPrecoProduto(e.target.value);
              }}
            />
            <TextField
              label="Tempo de Preparo"
              variant="outlined"
              fullWidth
              margin="normal"
              name="tempoDePreparo"
              value={tempoDePreparo}
              onChange={(e) => {
                setTempoDePreparo(e.target.value);
              }}
            />
            <TextField
              label="Calorias"
              variant="outlined"
              fullWidth
              margin="normal"
              name="calorias"
              value={calorias}
              onChange={(e) => {
                setCalorias(e.target.value);
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
            <FormControlLabel
              control={
                <Checkbox
                  name="contemGluten"
                  checked={contemGluten}
                  onChange={(e) => {
                    setContemGluten(e.target.checked);
                  }}
                />
              }
              label="Contém Glúten"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="vegetariano"
                  checked={vegetariano}
                  onChange={(e) => {
                    setVegetariano(e.target.checked);
                  }}
                />
              }
              label="Vegetariano"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="vegano"
                  checked={vegano}
                  onChange={(e) => setVegano(e.target.checked)}
                />
              }
              label="Vegano"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="disponivel"
                  checked={disponivel}
                  onChange={(e) => {
                    setDisponivel(e.target.checked);
                  }}
                />
              }
              label="Disponível"
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                <Typography textTransform={"none"}>Cancelar</Typography>
              </Button>
              <Button type="submit" variant="contained" color="primary">
                <Typography textTransform={"none"}>Enviar</Typography>
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Adicionar Item</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              adicionarProduto();
            }}
          >
          <TextField
            type="file"
            variant="outlined"
            fullWidth
            margin="normal"
            name="imagem"
            accept="image/*"
            onChange={(e) => {
              setImagem(e);
            }}
          />
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              margin="normal"
              name="nome"
              value={nomeProduto}
              onChange={(e) => {
                setNomeProduto(e.target.value);
              }}
            />
            <TextField
              label="Preço"
              variant="outlined"
              type="number"
              fullWidth
              margin="normal"
              name="preco"
              value={precoProduto}
              onChange={(e) => {
                setPrecoProduto(e.target.value);
              }}
            />
            <TextField
              label="Tempo de Preparo"
              variant="outlined"
              fullWidth
              margin="normal"
              name="tempoDePreparo"
              value={tempoDePreparo}
              onChange={(e) => {
                setTempoDePreparo(e.target.value);
              }}
            />
            <TextField
              label="Calorias"
              variant="outlined"
              fullWidth
              margin="normal"
              name="calorias"
              value={calorias}
              onChange={(e) => {
                setCalorias(e.target.value);
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
            <FormControlLabel
              control={
                <Checkbox
                  name="contemGluten"
                  checked={contemGluten}
                  onChange={(e) => {
                    setContemGluten(e.target.checked);
                  }}
                />
              }
              label="Contém Glúten"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="vegetariano"
                  checked={vegetariano}
                  onChange={(e) => {
                    setVegetariano(e.target.checked);
                  }}
                />
              }
              label="Vegetariano"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="vegano"
                  checked={vegano}
                  onChange={(e) => setVegano(e.target.checked)}
                />
              }
              label="Vegano"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="disponivel"
                  checked={disponivel}
                  onChange={(e) => {
                    setDisponivel(e.target.checked);
                  }}
                />
              }
              label="Disponível"
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                <Typography textTransform={"none"}>Cancelar</Typography>
              </Button>
              <Button type="submit" variant="contained" color="primary">
                <Typography textTransform={"none"}>Enviar</Typography>
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default Cardapio;

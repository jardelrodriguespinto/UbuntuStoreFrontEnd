import React from "react";
import HeaderEstabelecimento from "../../cabecalho/estabelecimento/HeaderEstabelecimento";
import BarraLateral from "../../barra-lateral/BarraLateral";
import Footer from "../../Footer";
import "./minhaLoja.css";
import axios, { AxiosHeaders } from "axios";
// import { ubuntuIp } from "../../../../propriedades";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
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

function MinhaLoja() {
  const navigate = useNavigate();
  const [nomeProduto, setNomeProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [tempoDePreparo, setTempoDePreparo] = useState("");
  const [calorias, setCalorias] = useState("");
  const [disponivel, setDisponivel] = useState(true);
  const [contemGluten, setContemGluten] = useState(false);
  const [vegetariano, setVegetariano] = useState(false);
  const [vegano, setVegano] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const setImagem = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  const enviarProduto = async () => {};

  return (
    <div>
      <HeaderEstabelecimento logo={true} />
      <div className="homeEstabelecimento">
        <BarraLateral />
          <Stack direction={"column"} alignItems={"center"}>
          <Box>
            
          </Box>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                enviarProduto();
              }}
            >
              <Stack  fullWidth direction={"column"}>
                <TextField
                  fullWidth
                  type="file"
                  variant="outlined"
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
                  width="50%"
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
                <Grid container>
                  <Grid item>
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
                      label={
                        <span style={{ color: "black" }}>Contém Glúten</span>
                      }
                    />
                  </Grid>
                  <Grid item>
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
                      label={
                        <span style={{ color: "black" }}>Vegetariano</span>
                      }
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="vegano"
                          checked={vegano}
                          onChange={(e) => setVegano(e.target.checked)}
                        />
                      }
                      label={<span style={{ color: "black" }}>Vegano</span>}
                    />
                  </Grid>
                  <Grid item>
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
                      label={<span style={{ color: "black" }}>Disponível</span>}
                    />
                  </Grid>
                </Grid>
              </Stack>
              <DialogActions>
                <Button
                  onClick={() => {
                    navigate("/estabelecimentos/cardapio");
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
    </div>
  );
}

export default MinhaLoja;

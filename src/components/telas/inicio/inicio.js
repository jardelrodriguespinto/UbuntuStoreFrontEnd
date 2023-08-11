import "../../../assets/style/index.css";
import React, { useState } from "react";
import Header from "../../cabecalho/Header";
import PublicIcon from "@mui/icons-material/Public";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import { BotaoBaixeApp } from "../../BotaoBaixeApp";
import { ThemeContext } from "@emotion/react";

function Inicio() {
  const [format, setFormat] = useState([]);
  const tema = useTheme();
  const navigate = useNavigate();
  function irParaLogin() {
    navigate("/login");
  }

  return (
    <>
      <Header logo={true} baixar={true} login={false} navBar={true} />
      <Box
        classname="main-box"
        sx={{ backgroundColor: tema.palette.secondary.main }}
      >
        <Stack direction={"column"} className="primeira-secao">
          <Typography
            color={tema.palette.primary.light}
            fontWeight={600}
            paddingBottom={"60px"}
            variant="h4"
          >
            Explore a <span>Ubuntu</span>: seu serviço de Delivery de Comida
            Simplificada!
          </Typography>
          <Typography color={tema.palette.contrastThreshold}>
            Peça, saboreie, repita! Com Ubuntu, a melhor comida está a um toque
            de distância. Baixe agora e desfrute!
          </Typography>
          <Stack direction={"row"}>
            <Grid container gap={"50px"} height={"auto"}>
              <Grid item>
                <Stack
                  direction={"column"}
                  alignItems="center"
                  sx={{
                    width: {
                      sm: "150px",
                      md: "200px",
                      lg: "300px",
                      el: "400px",
                    },
                  }}
                >
                  <PublicIcon
                    style={{ color: tema.palette.primary.main }}
                    sx={{
                      width: {
                        sm: "100px",
                        md: "150px",
                        lg: "220px",
                        el: "300px",
                      },
                      height: {
                        sm: "100px",
                        md: "150px",
                        lg: "220px",
                        el: "300px",
                      },
                    }}
                  />
                  <Typography
                    variant="h5"
                    color={tema.palette.contrastThreshold}
                  >
                    Sustentabilidade Social
                  </Typography>
                  <Typography
                    paragraph
                    textAlign={"center"}
                    variant="subtitle1"
                    color={tema.palette.contrastThreshold}
                    fontWeight={600}
                  >
                    Apoiando a Ubuntu, você apoia uma empresa de trabalhadores
                    em prol de trabalhadores
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack
                  direction={"column"}
                  alignItems="center"
                  sx={{
                    width: {
                      sm: "150px",
                      md: "200px",
                      lg: "300px",
                      el: "400px",
                    },
                  }}
                >
                  <DeliveryDiningIcon
                    style={{ color: tema.palette.primary.main }}
                    sx={{
                      width: {
                        sm: "100px",
                        md: "150px",
                        lg: "220px",
                        el: "300px",
                      },
                      height: {
                        sm: "100px",
                        md: "150px",
                        lg: "220px",
                        el: "300px",
                      },
                    }}
                  />
                  <Typography
                    color={tema.palette.contrastThreshold}
                    variant="h5"
                  >
                    Serviço humanizado
                  </Typography>
                  <Typography
                    paragraph
                    textAlign={"center"}
                    variant="subtitle1"
                    color={tema.palette.contrastThreshold}
                  >
                    Nós nos dedicamos a manter um ambiente saudável para todos a
                    fim de que sempre haja prestação de serviços satisfatória
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack
                  direction={"column"}
                  alignItems="center"
                  sx={{
                    width: {
                      sm: "150px",
                      md: "200px",
                      lg: "300px",
                      el: "400px",
                    },
                  }}
                >
                  <StarBorderIcon
                    style={{ color: tema.palette.primary.main }}
                    sx={{
                      width: {
                        sm: "100px",
                        md: "150px",
                        lg: "220px",
                        el: "300px",
                      },
                      height: {
                        sm: "100px",
                        md: "150px",
                        lg: "220px",
                        el: "300px",
                      },
                    }}
                  />
                  <Typography
                    variant="h5"
                    color={tema.palette.contrastThreshold}
                  >
                    Em breve
                  </Typography>
                  <Typography
                    paragraph
                    textAlign={"center"}
                    variant="subtitle1"
                    color={tema.palette.contrastThreshold}
                  >
                    Consuma na Ubuntu e acumule vantagens em festas e eventos{" "}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <BotaoBaixeApp />
          <Typography margin={"20px"} variant="h5" color={tema.palette.contrastThreshold}>
            ou se você for um estabelecimento
          </Typography>
          <Button variant="outlined" onClick={() => {
            
            irParaLogin();
            }}>
            <Typography textTransform={"none"} variant="h5" color={tema.palette.contrastThreshold}>
              Ir para Área do estabelecimento
            </Typography>
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Inicio;

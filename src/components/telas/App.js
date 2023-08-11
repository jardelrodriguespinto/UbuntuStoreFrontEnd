import React, { useState } from "react";
import Inicio from "./inicio/inicio";
import "./app.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4EBC52",
    },
    secondary: {
      main: "#465750",
    },
    primariaEstabelecimento: {  // Adicione sua paleta personalizada aqui
      main: '#A3D29F', // Cor principal da paleta personalizada
      contrastText: '#ffffff', // Cor do texto contrastante
    },
    secundariaEstabelecimento: {  // Adicione sua paleta personalizada aqui
      main: '#5B8558', // Cor principal da paleta personalizada
      contrastText: '#ffffff', // Cor do texto contrastante
    },
  },
});

function App() {
  const [format, setFormat] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor: theme.palette.secondary.main}}>
        <Inicio />
      </Box>
    </ThemeProvider>
  );
}

export default App;

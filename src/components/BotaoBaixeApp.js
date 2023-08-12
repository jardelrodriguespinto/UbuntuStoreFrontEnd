import { Button, Typography } from '@mui/material';
import teste from '../assets/img/teste.png';
import "../assets/style/botao-baixe-app.modules.css"

export function BotaoBaixeApp(props){
    return (
        <>
            <Button size='large' variant="contained"  >
                <Typography variant = "h4"   textTransform={'none'}>Baixe o app na Play Store</Typography>
            </Button>
        </>
    );
}

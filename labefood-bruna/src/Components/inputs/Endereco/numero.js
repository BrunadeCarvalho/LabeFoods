import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const NumeroInput = ({validacao, value, onChange}) =>{

    return(
        <Box validacao={!validacao}
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '328px'},
        }}
        noValidate
        autoComplete="off"
    >
        <TextField
            required
            id="outlined-required" 
            label="Número" 
            variant="outlined"
            name="number"
            type="number"
            value={value}
            onChange={onChange}
            placeholder="Número"
        />
{/*             {!validacao ? (
            <p> Número inválido </p>
        ): undefined } */}
    </Box>
    )

}
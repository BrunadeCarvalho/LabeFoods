import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const ComplementoInput = ({validacao, value, onChange}) =>{

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
            id="outlined" 
            label="Complemento" 
            variant="outlined"
            name="complement"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Apto. / Bloco"
        />
{/*             {!validacao ? (
            <p> E-mail inválido </p>
        ): undefined } */}
    </Box>
    )

}
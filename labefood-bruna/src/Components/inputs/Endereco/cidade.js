import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const CidadeInput = ({validacao, value, onChange}) =>{

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
            label="Cidade" 
            variant="outlined"
            name="city"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Cidade"
        />
{/*             {!validacao ? (
            <p> E-mail inválido </p>
        ): undefined } */}
    </Box>
    )

}
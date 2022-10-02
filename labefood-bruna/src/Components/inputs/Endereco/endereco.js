import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const EnderecoInput = ({validacao, value, onChange}) =>{

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
            label="Logradouro" 
            variant="outlined"
            name="street"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Rua / Av."
        />
{/*             {!validacao ? (
            <p> Digite o endereço corretamente </p>
        ): undefined } */}
    </Box>
    )

}
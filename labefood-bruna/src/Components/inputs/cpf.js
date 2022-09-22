import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const CPFInput = ({validacao, value, onChange}) =>{
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
                label="CPF"
                name="cpf"
                value={value}
                onChange={onChange}
                placeholder="CPF"
            />
            {!validacao ? (
                <p> Insira os 11 dígitos corretamente </p>
            ): undefined }
        </Box>
    )
}
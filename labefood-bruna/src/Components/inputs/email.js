import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const EmailInput = ({validacao, value, onChange}) =>{
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
                label="E-mail" 
                variant="outlined"
                name="email"
                type="email"
                value={value}
                onChange={onChange}
                placeholder="email@email.com"
            />
            {!validacao ? (
                <p> E-mail inválido </p>
            ): undefined }
        </Box>
    )
}

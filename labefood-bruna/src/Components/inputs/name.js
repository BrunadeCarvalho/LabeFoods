import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const NameInput = ({validacao, value, onChange}) =>{
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
                label="Nome"
                variant="outlined"            
                name="name"
                value={value}
                onChange={onChange}
                placeholder="Nome completo"
            />
            {!validacao ? (
                <p> Nome deve ter pelo menos 2 caracteres</p>
            ): undefined }
        </Box>
    )
}
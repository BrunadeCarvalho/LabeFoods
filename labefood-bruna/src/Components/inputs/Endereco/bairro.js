import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const BairroInput = ({value, onChange}) =>{
    return(
        <Box
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
                label="Bairro" 
                variant="outlined"
                name="neighbourhood"
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Bairro"
                minLength={2}
            />
        </Box>
    )
}

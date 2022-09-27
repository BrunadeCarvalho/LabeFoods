import TextField from '@mui/material/TextField';
import { BoxContainer, Inputs } from '../styled';

export const NameInput = ({validacao, value, onChange}) =>{
    return(
        <BoxContainer validacao={!validacao}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '328px'},
            }}
            noValidate
            autoComplete="off"
        >
            <Inputs
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
                <p> Nome deve ter pelo menos 2 caracteres </p>
            ): undefined }
        </BoxContainer>
    )
}
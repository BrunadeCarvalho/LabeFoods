import { BoxContainer, Inputs } from '../styled';

export const NameInput = ({value, onChange}) =>{
    return(
        <BoxContainer 
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

        </BoxContainer>
    )
}
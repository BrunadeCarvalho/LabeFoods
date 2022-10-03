import { BoxContainer, Inputs } from '../styled';

export const CPFInput = ({validacao, value, onChange}) =>{
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
                label="CPF"
                name="cpf"
                value={value}
                onChange={onChange}
                placeholder="000.000.000-00"
            />
            {!validacao ? (
                undefined
            ): undefined }
        </BoxContainer>
    )
}
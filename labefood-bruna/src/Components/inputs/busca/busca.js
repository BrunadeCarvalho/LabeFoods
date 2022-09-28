import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { GlobalStateContext } from '../../../Global/GlobalStateContext';
import { useRequestData } from '../../../Hook/useRequestData';
import { BoxBuscar, DivCards, DivInformacaoRestaurante } from './styled';


export const BuscaInput = () =>{
    const [listaDeRestaurantes, isLoading] = useRequestData()
    const {busca, setBuscar} = useContext(GlobalStateContext)

    const restauranteFiltrado = listaDeRestaurantes
    .filter((item) => item.name.toLowerCase().includes(busca.toLowerCase()))

    const ResultadoBusca= restauranteFiltrado.map((item, index)=>{
        return(
            <DivCards key={index}>
                <img  src={item.logoUrl} alt={item.name}/>
                <p>{item.name}</p>
                <DivInformacaoRestaurante>
                    <span>{item.deliveryTime} min</span>
                    <span> Frete: {item.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                </DivInformacaoRestaurante>
            </DivCards>
        )
    })


    
    return(
        <BoxBuscar 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '328px'},
            }}
            noValidate
            autoComplete="off"
        >
            <AiOutlineSearch size="25px"  color='#b8b8b8' className='icone'/>
            <TextField className='texto'
                id="outlined" 
                label="Restaurante" 
                variant="outlined"
                name="busca"
                type="text"
                value={busca}
                onChange={(ev)=> {
                    ev.preventDefault()
                    setBuscar(ev.target.value)}
                }
                placeholder="Restaurante"
            />
{/*             {!validacao ? (
                <p> E-mail inválido </p>
            ): undefined } */}
        </BoxBuscar>
    )
}

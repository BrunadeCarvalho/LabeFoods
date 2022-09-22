import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BuscaInput } from "../../Components/inputs/busca/busca"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { useRequestData } from "../../Hook/useRequestData"
import { goToResultadoPage } from "../../Routes/Coordinator"
import { DivInformacaoRestaurante } from "../Feed/styled"
import { DivCards, DivFundo, DivRenderizacao, } from "./styled"

export const BuscarPage=()=>{
    const navigate = useNavigate();

    const [listaDeRestaurantes, isLoading] = useRequestData()
    const {busca, setBuscar} = useContext(GlobalStateContext)

    const onClickCard=(id) =>{
        goToResultadoPage(navigate, id)
    }

    const restauranteFiltrado = listaDeRestaurantes
    .filter((item) => item.name.toLowerCase().includes(busca.toLowerCase()))

    const ResultadoBusca= restauranteFiltrado.map((item, index)=>{
        return(
            <DivCards key={index} onClick={()=> onClickCard(item.id)}>
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
        <DivFundo>
                <BuscaInput
                    value={busca}
                    onChange={(ev)=> setBuscar(ev.target.value)}
                />
                {busca.length > 0 ?
                <DivRenderizacao>
                    {ResultadoBusca.length > 0 ?
                    <div>
                        {ResultadoBusca}
                    </div>
                    :
                    <p className="semResultado"> Não Encontramos :( </p>
                    }    
                </DivRenderizacao>
                :
                <p className="semResultado">Busque por nome de restaurante</p>
                
                }
        </DivFundo>
    )
}
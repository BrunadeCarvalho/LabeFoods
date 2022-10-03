import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../../Components/Header/Header"
import { BuscaInput } from "../../Components/inputs/busca/busca"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { useRequestData } from "../../Hook/useRequestData"
import { goToResultadoPage } from "../../Routes/Coordinator"
import { DivInformacaoRestaurante } from "../Feed/styled"
import { DivCards, DivRenderizacao, FundoBuscar, } from "./styled"

export const BuscarPage=()=>{
    const navigate = useNavigate();

    const [listaDeRestaurantes, isLoading] = useRequestData()
    const {busca, setBuscar} = useContext(GlobalStateContext)

    console.log(listaDeRestaurantes)

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
        <FundoBuscar>
            <Header>
                Busca
            </Header>
            <BuscaInput
                value={busca}
                onChange={event=> setBuscar(event.target.value)}
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
        </FundoBuscar>
    )
}

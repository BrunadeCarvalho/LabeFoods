import { useContext, } from "react"
import { useNavigate } from "react-router-dom"
import { FooterComponents } from "../../Components/Footer/Footer"
import { DivFundoPaginaFooter } from "../../Components/FundoStyled/styled"
import { Header } from "../../Components/Header/Header"
import { BuscaInput } from "../../Components/inputs/busca/busca"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { useRequestData } from "../../Hook/useRequestData"
import { goToResultadoPage } from "../../Routes/Coordinator"
import { DivInformacaoRestaurante } from "../Feed/styled"
import { BuscarTextoStyled, DivCards, DivRenderizacao, } from "./styled"

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
        <DivFundoPaginaFooter>
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
                <BuscarTextoStyled> Não Encontramos :( </BuscarTextoStyled>
                }    
            </DivRenderizacao>
            :
            <BuscarTextoStyled>Busque por nome de restaurante</BuscarTextoStyled>
            }
            <FooterComponents />
        </DivFundoPaginaFooter>
    )
}

import { BuscaInput } from "../../Components/inputs/busca/busca"
import { useRequestData } from "../../Hook/useRequestData"
import { DivCategorias,  DivInformacaoRestaurante, InfoPedidoStyled, PedidoEmAndamentoStyled, RelogioStyled } from "./styled"
import { goToResultadoPage } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { DivCards,  DivRenderizacao } from "../Busca/styled"
import { FooterComponents } from "../../Components/Footer/Footer"
import {MdAccessTime} from "react-icons/md"
import { CircularProgress } from "@mui/material";
import Stack from '@mui/material/Stack';
import { DivCarregando } from "../../Components/Cards/Style"
import { DivFundoPaginaFooter } from "../../Components/FundoStyled/styled"


export const FeedPage=()=>{
    
    const navigate = useNavigate();
    const {busca, pedidoEmAndamento} = useContext(GlobalStateContext)
    const [listaDeRestaurantes, isLoading, ListaDeCategorias, obterRestaurantes] = useRequestData()
    const [filtroCategoria, setFiltroCategoria]=useState([])
    
    useEffect(()=>{
        obterRestaurantes()
    },[])


    const onClickCard=(id) =>{
        goToResultadoPage(navigate, id)
    }

    const restauranteFiltrado = listaDeRestaurantes
    .filter((item) => item.name.toLowerCase().includes(busca.toLowerCase()))

    const ResultadoBusca = restauranteFiltrado.map((item, index)=>{
        return(
            <DivCards key={index} onClick={()=> onClickCard(item.id)}>
                <img src={item.logoUrl} alt={item.name}/>
                <p>{item.name}</p>
                <DivInformacaoRestaurante>
                    <span>{item.deliveryTime} min</span>
                    <span> Frete: {item.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                </DivInformacaoRestaurante>
            </DivCards>
        )
    })

    const categorias=ListaDeCategorias.map((item)=>{
        const botaoCategorias=()=>{
            setFiltroCategoria(listaDeRestaurantes.filter((restaurante)=>{
                return restaurante.category === item
            }))
        }

        return(
            <button onClick={botaoCategorias}>{item}</button>
        )
    })

    const todos=()=>{
        navigate(0)
    }

    return(
        <DivFundoPaginaFooter>
            {isLoading ?
                <DivCarregando>
                    <Stack sx={{ color: 'grey.500' }} spacing={1} direction="row">
                        <CircularProgress color="inherit" size="50px" />
                        <CircularProgress color="inherit" size="50px" />
                        <CircularProgress color="inherit" size="50px" />
                    </Stack>
                </DivCarregando>
                :
                <>
                    <BuscaInput /> 
                    <DivCategorias>
                        <button className="todos" onClick={todos}>Todos</button>
                        {categorias}
                    </DivCategorias>
                    <DivRenderizacao>
                        {filtroCategoria.length > 0 ?
                            filtroCategoria.map((item, index)=>(
                                <DivCards key={index} onClick={()=> onClickCard(item.id)}>
                                    <img src={item.logoUrl} alt={item.name}/>
                                    <p>{item.name}</p>
                                    <DivInformacaoRestaurante>
                                        <span>{item.deliveryTime} min</span>
                                        <span> Frete: {item.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                                    </DivInformacaoRestaurante>
                                </DivCards>
                            ))
                        : 
                        ResultadoBusca.length > 0 ?
                        <div>
                            {ResultadoBusca}
                        </div>
                        :
                        <p className="semResultado">Não Encontramos :( </p>
                        }
                    </DivRenderizacao>
                    {pedidoEmAndamento?.totalPrice > 0 ?
                        <PedidoEmAndamentoStyled>
                            <RelogioStyled>
                                <p><MdAccessTime size="32px" color="white"/></p>
                            </RelogioStyled>
                            <InfoPedidoStyled>
                                <p className="status">Pedido em andamento</p>
                                <p className="restaurante">{pedidoEmAndamento?.restaurantName}</p>
                                <p className="pagamento">SUBTOTAL: {pedidoEmAndamento?.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                            </InfoPedidoStyled>
                        </PedidoEmAndamentoStyled>
                        :
                        null
                    }
                    <FooterComponents /> 
                </>
            }               
        </DivFundoPaginaFooter>
    )
}
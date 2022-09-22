import { useContext, useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../../Constants"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { CircularProgress } from "@mui/material";
import Stack from '@mui/material/Stack';
import {  goToMeuCarrinhoPage } from "../../Routes/Coordinator"
import { CardItens, CardRestaurante, DivCarregando, DivFundoResultado, InformacaoProduto, Preco } from "../../Components/Cards/Style"

export const Resultado=()=>{
    const navigate=useNavigate();

    const [detalhesRestaurante, setDetalhesRestaurante]=useState([])
    const {addProduto, setAddProduto, isLoading, setIsLoading, setInfoRestaurante, infoRestaurante}=useContext(GlobalStateContext)

    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }
 
    const param = useParams()

    const obterRestaurantes=()=>{
        setIsLoading(true)
        axios.get(`${BASE_URL}/restaurants/${param.id}`, headers)
        .then((response)=>{
            setIsLoading(false)
            setDetalhesRestaurante(response.data.restaurant.products)
            setInfoRestaurante(response.data.restaurant)
        }).catch((error)=>{
            navigate("/")
        })
    }
    

    useEffect(()=>{
        obterRestaurantes()
    }, [])

     detalhesRestaurante.map((item, index)=>{
        return (
            <>
                <CardItens key={index}>
                    <img src={item.photoUrl} alt={item.name}/>
                    <InformacaoProduto>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                        <Preco>
                            <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                            <button onClick={()=> setAddProduto([...addProduto, item])}>Adicionar</button>
                        </Preco>
                    </InformacaoProduto>
                </CardItens>
            </>
        )
    })

    const produtosVariasCategorias =detalhesRestaurante.filter((item, index)=>{
        if (item.category !== "Bebida" && item.category !== "Acompanhamento" && item.category !== "Sobremesa" && item.category !== "Doce" && item.category !== "Sorvete"){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        }
    })

    const resultadoVariasCategorias = produtosVariasCategorias.map((item, index)=>{
        return(
            <>
                <CardItens>
                    <img src={item.photoUrl} alt={item.name}/>
                    <InformacaoProduto>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                        <Preco>
                            <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                            <button onClick={()=> setAddProduto([...addProduto, item])}>Adicionar</button>
                        </Preco>
                    </InformacaoProduto>
                </CardItens>
            </>
        )
    })

    const bebidas=detalhesRestaurante.filter((item, index)=>{
        if (item.category === "Bebida" ){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        } 
    })

    const resultadoBebidas = bebidas.map((item)=>{
        return(
            <>
                <CardItens>
                    <img src={item.photoUrl} alt={item.name}/>
                    <InformacaoProduto>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                        <Preco>
                            <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                            <button onClick={()=> setAddProduto([...addProduto, item])}>Adicionar</button>
                        </Preco>
                    </InformacaoProduto>
                </CardItens>
            </>
        )
    })
    console.log(addProduto)

    const acompanhamentos=detalhesRestaurante.filter((item, index)=>{
        if (item.category === "Acompanhamento"){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        }
    })

    const resultadoAcompanhamento = acompanhamentos.map((item)=>{
        return(
            <> 
                <CardItens>
                    <img src={item.photoUrl} alt={item.name}/>
                    <InformacaoProduto>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=> setAddProduto([...addProduto, item])}>Adicionar</button>
                    </Preco>
                    </InformacaoProduto>
                </CardItens>
            </>
        )
    })

    const sobremesa=detalhesRestaurante.filter((item, index)=>{
        if (item.category === "Sobremesa" || item.category === "Sorvete" || item.category === "Doce"){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        }
    })

    const resultadoSobremesa = sobremesa.map((item)=>{
        return(
            <> 
                <CardItens>
                    <img src={item.photoUrl} alt={item.name}/>
                    <InformacaoProduto>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=> setAddProduto([...addProduto, item])}>Adicionar</button>
                    </Preco>
                    </InformacaoProduto>
                </CardItens>
            </>
        )
    })

    return(
        <DivFundoResultado>
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
                <CardRestaurante>
                    <button onClick={()=>goToMeuCarrinhoPage(navigate)}>Carrinho</button>
                    <img src={infoRestaurante?.logoUrl}  alt={infoRestaurante?.name}/>
                    <p>{infoRestaurante?.name}</p>
                    <span className="categoria">{infoRestaurante?.category}</span>
                    <div>
                        <span className="tempo">{infoRestaurante?.deliveryTime} min</span>
                        <span className="delivery"> {infoRestaurante?.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </div>
                        <span className="endereco"> {infoRestaurante?.address} </span>
                </CardRestaurante>
                <div>
                    <h6>Principais</h6>
                    {resultadoVariasCategorias}
                </div>

                {resultadoAcompanhamento.length > 0 ?
                <div>
                    <h6>Acompanhamentos</h6>
                    {resultadoAcompanhamento}
                </div>
                :
                undefined
                }

                <div>
                    <h6>Bebidas</h6>
                    {resultadoBebidas}
                </div>

                {resultadoSobremesa.length > 0 ?
                <div>
                    <h6>Sobremesa</h6>
                    {resultadoSobremesa}
                </div>
                :
                undefined
                }
            </>
            }

        </DivFundoResultado>
    )
}
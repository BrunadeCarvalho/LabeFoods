import { useContext, useEffect } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../../Constants"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { CircularProgress } from "@mui/material";
import Stack from '@mui/material/Stack';
import { CardItens, CardRestaurante, DivCarregando, DivFundoResultado, InformacaoProduto, Preco } from "../../Components/Cards/Style"
import * as React from 'react';
import { FooterComponents } from "../../Components/Footer/Footer"
import BasicModal from "../../Components/Modal/Modal"
import { toast } from "react-toastify"
import { Header } from "../../Components/Header/Header"

export const Resultado=()=>{
    const {addProduto, setAddProduto, isLoading, setIsLoading, setInfoRestaurante, infoRestaurante, detalhesRestaurante, setDetalhesRestaurante}=useContext(GlobalStateContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const adicionandoProdutoNoCarrinho = (item, quantidade) => {
        item = {
            ...item,
            quantity: quantidade
        }
        const newCarrinho = [...addProduto, item]
        setAddProduto(newCarrinho)
        toast.success('Item adicionado ao carrinho', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        localStorage.setItem("carrinho", JSON.stringify(newCarrinho))
    }

    const navigate=useNavigate();
    const param = useParams()

    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }

    const obterRestaurantes=()=>{
        setIsLoading(true)
        axios.get(`${BASE_URL}/restaurants/${param.id}`, headers)
        .then((response)=>{
            setIsLoading(false)
            setInfoRestaurante(response.data.restaurant)
            setDetalhesRestaurante(response.data.restaurant.products)
            localStorage.setItem("restaurante", JSON.stringify(response.data.restaurant)
            )
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
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <BasicModal item={item} add={adicionandoProdutoNoCarrinho} />
                    </Preco>
                </InformacaoProduto>
            </CardItens>
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

    const resultadoBebidas = bebidas.map((item, index)=>{
        return(
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <BasicModal item={item} add={adicionandoProdutoNoCarrinho} />
                    </Preco>
                </InformacaoProduto>
            </CardItens>
        )
    })

    const acompanhamentos=detalhesRestaurante.filter((item, index)=>{
        if (item.category === "Acompanhamento"){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        }
    })

    const resultadoAcompanhamento = acompanhamentos.map((item, index)=>{
        return(
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                <Preco>
                    <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                    <BasicModal item={item} add={adicionandoProdutoNoCarrinho} />
                </Preco>
                </InformacaoProduto>
            </CardItens>
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

    const resultadoSobremesa = sobremesa.map((item, index)=>{
        return(
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                <Preco>
                    <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                    <BasicModal item={item} add={adicionandoProdutoNoCarrinho} />
                 </Preco>
                </InformacaoProduto>
            </CardItens>
        )
    })

    return(
        <DivFundoResultado>
            <Header>
                Restaurante
            </Header>
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
                    <img src={infoRestaurante?.logoUrl}  alt={infoRestaurante?.name}/>
                    <p>{infoRestaurante?.name}</p>
                    <span className="categoria">{infoRestaurante?.category}</span>
                    <div>
                        <span className="tempo">{infoRestaurante?.deliveryTime} min</span>
                        <span className="delivery">{Number(infoRestaurante.shipping).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
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
            <FooterComponents />
        </DivFundoResultado>
    )
}
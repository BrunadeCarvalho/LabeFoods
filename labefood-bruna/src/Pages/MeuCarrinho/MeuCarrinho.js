import axios from "axios"
import { useContext, useEffect, useState, } from "react"
import { useNavigate, useParams, } from "react-router-dom"
import { BotaoLaranja } from "../../Components/Botoes/styled"
import { CardItens, InformacaoProduto, Preco } from "../../Components/Cards/Style"
import {  FooterComponents } from "../../Components/Footer/Footer"
import { BASE_URL } from "../../Constants"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { useRequestData } from "../../Hook/useRequestData"
import { DadosRestaurante, DivFundoPaginaFooter, DivValorTotal, Frete, PagamentoStyled, TextoCarrinho } from "./styled"
import { toast } from "react-toastify";
import { dark } from "@mui/material/styles/createPalette"


export const MeuCarrinhoPage=(props)=>{
    const [listaDeRestaurantes, isLoading, ListaDeCategorias, obterRestaurantes] = useRequestData()

    useEffect(()=>{
        obterRestaurantes()
    },[])

    const navigate=useNavigate()
    const {addProduto, setAddProduto, infoRestaurante }=useContext(GlobalStateContext)
    const [valorTotal, setValorTotal]=useState(0)
    const [creditCard, setCreditCard] = useState(true)
    const [money, setMoney] = useState(false)

    
    const handlePaymentMethod = () => {
        setCreditCard(!creditCard)
        setMoney(!money)
    }

    const deletarProdutos = (produto) =>{
        const novoCarrinho = [...addProduto]
        const deletar = novoCarrinho.findIndex((p)=> p === produto)

        if(novoCarrinho[deletar].quantity===1){
            novoCarrinho.splice(deletar, 1)
        }else{
            novoCarrinho[deletar].quantity--
        }
        setAddProduto(novoCarrinho)
    }

    const carrinho = addProduto.map((item, index)=>{
        return(
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p className="quantidade">{item.quantity}</p>
                    <p className="nome">{item.name}</p>
                    <p className="descricao">{item.description}</p>
                    <Preco>
                        <span> {item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=>deletarProdutos(item)}>Remover</button>
                    </Preco>
                </InformacaoProduto>
            </CardItens>
        )
    })

    let valorFrete = Number(infoRestaurante.shipping)

    useEffect(()=>{

        let valorFinal = 0
        addProduto.forEach((produto)=>{
            valorFinal += (produto.price * produto.quantity) 
        }, [addProduto])
        setValorTotal(valorFinal + valorFrete)
        localStorage.setItem("carrinho", JSON.stringify(addProduto))
    },[addProduto])

    const param = useParams()

    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }

    const placeOrder=()=>{
        const arr = addProduto.map(({quantity, id}) => {
            return {
                quantity,
                id
            }
        })

        const body = {
            products: arr,
            paymentMethod: money ? "money" : "creditcard"
        }

        {carrinho.length > 0 ?
        axios.post(`${BASE_URL}/restaurants/${param.id}/order`, body, headers)
        .then((response)=>{
            toast.success('Pedido realizado com sucesso!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }).catch((error)=>{
            toast.error('Aguarde seu outro pedido ser finalizado.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        })
        :
        toast.warn('Insira pelo menos 1 item no carrinho.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });    }
    }




    return(
        <DivFundoPaginaFooter>
            {carrinho.length > 0 ?
            <DadosRestaurante>
                <img src={infoRestaurante?.logoUrl} alt={infoRestaurante?.name} />
                <p className="estabelecimento">{infoRestaurante?.name}</p>
                <p className="endereco">{infoRestaurante?.address}</p>
                <p className="entrega">{infoRestaurante?.deliveryTime} min</p>
            </DadosRestaurante>
            :
            undefined
            }
            {carrinho.length > 0 ?
            <DivFundoPaginaFooter>
                {carrinho}
            </DivFundoPaginaFooter>
            :
            <TextoCarrinho>Carrinho vazio</TextoCarrinho>  
            }
            {carrinho.length > 0 ? 
            <Frete>
                <p className="valorFrete">Frete: {infoRestaurante.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </Frete>
            :
            <Frete>
                <p className="valorFrete">Frete: R$ 0,00</p>
            </Frete>
            }
            <DivValorTotal>
                <p className="subtotal">SUBTOTAL:</p> 
                <p className="valor"> {valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </DivValorTotal>
            <h6>Forma de pagamento</h6>
            <PagamentoStyled>
                <label>
                    <input type="radio" checked={money} onChange={handlePaymentMethod} name="fav_language"/> 
                    Dinheiro
                </label>
            </PagamentoStyled>
            <PagamentoStyled>
                <label>
                    <input type="radio" checked={creditCard} onChange={handlePaymentMethod} name="fav_language"/> 
                    Cartão de crédito
                </label>
            </PagamentoStyled>
            <BotaoLaranja onClick={placeOrder}>Confirmar</BotaoLaranja>
            <FooterComponents />
        </DivFundoPaginaFooter>

    )
}
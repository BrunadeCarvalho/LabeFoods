import axios from "axios"
import { useContext, useEffect, useState, } from "react"
import { useNavigate, } from "react-router-dom"
import { BotaoLaranja } from "../../Components/Botoes/styled"
import { CardItens, InformacaoProduto, Preco } from "../../Components/Cards/Style"
import {  FooterComponents } from "../../Components/Footer/Footer"
import { BASE_URL } from "../../Constants"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { DadosRestaurante, DivFundoPaginaFooter, DivValorTotal, Frete, PagamentoStyled, TextoCarrinho } from "./styled"

export const MeuCarrinhoPage=(props)=>{

    const navigate=useNavigate()
    const {addProduto, setAddProduto, infoRestaurante }=useContext(GlobalStateContext)
    const [valorTotal, setValorTotal]=useState(0)
    const [criarPedido, setCriarPedido]=useState([])

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
                        <span> R$ {item.price} </span>
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
            valorFinal += (produto.price * produto.quantity) + valorFrete
        }, [addProduto])
        setValorTotal(valorFinal)
        localStorage.setItem("carrinho", JSON.stringify(addProduto))
    })

    const body={
        "products": [{
            "id": "",
            "quantity": ""
        }, {
            "quantity": "",
            "id": ""
        }],
        "paymentMethod": ""
    }

    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }

    const placeOrder=()=>{
        axios.post(`${BASE_URL}/restaurants/:restaurantId/order`, body, headers)
        .then((response)=>{
            setCriarPedido()
            alert("Pedido Criado com sucesso")
        }).catch((error)=>{
            alert ("Pedido não realizado")
        })
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
                <input type="radio"  name="fav_language"/> 
                <label>Dinheiro</label>
            </PagamentoStyled>
            <PagamentoStyled>
                <input type="radio"  name="fav_language"/> 
                <label>Cartão de crédito</label>
            </PagamentoStyled>
            <BotaoLaranja onClick={placeOrder}>Confirmar</BotaoLaranja>
            <FooterComponents />
        </DivFundoPaginaFooter>

    )
}
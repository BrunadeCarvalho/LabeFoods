import { useContext, useEffect, useState, } from "react"
import { useNavigate, } from "react-router-dom"
import { BotaoLaranja } from "../../Components/Botoes/styled"
import { CardItens, InformacaoProduto, Preco } from "../../Components/Cards/Style"
import {  FooterComponents } from "../../Components/Footer/Footer"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { DadosRestaurante, DivFundoPaginaFooter, DivValorTotal, Frete, TextoCarrinho } from "./styled"

export const MeuCarrinhoPage=(props)=>{

    const navigate=useNavigate()
    const {addProduto, setAddProduto, infoRestaurante }=useContext(GlobalStateContext)
    const [valorTotal, setValorTotal]=useState(0)

    const deletarProdutos = (produto) =>{
        const novoCarrinho = [...addProduto]
        const deletar = novoCarrinho.findIndex((p)=> p === produto)
        novoCarrinho.splice(deletar, 1)
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
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
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

    return(
        <DivFundoPaginaFooter>
            <DadosRestaurante>
                <p className="estabelecimento">{infoRestaurante?.name}</p>
                <p className="endereco">{infoRestaurante?.address}</p>
                <p className="entrega">{infoRestaurante?.deliveryTime} min</p>
            </DadosRestaurante>
            {carrinho. length > 0 ?
            <DivFundoPaginaFooter>
                {carrinho}
            </DivFundoPaginaFooter>
            :
            <TextoCarrinho>Carrinho vazio</TextoCarrinho>  
            }
            <Frete>
                <p className="valorFrete">Frete: {infoRestaurante.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </Frete>
            <DivValorTotal>
                <p className="subtotal">SUBTOTAL:</p> 
                <p className="valor"> {valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </DivValorTotal>
            <BotaoLaranja>Confirmar</BotaoLaranja>
            <FooterComponents />
        </DivFundoPaginaFooter>

    )
}
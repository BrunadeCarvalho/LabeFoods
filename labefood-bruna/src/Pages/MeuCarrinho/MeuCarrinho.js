import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BotaoLaranja } from "../../Components/Botoes/styled"
import { CardItens, DivFundoResultado, InformacaoProduto, Preco } from "../../Components/Cards/Style"
import { Footer, FooterComponents } from "../../Components/Footer/Footer"
import { BASE_URL } from "../../Constants"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { useRequestData } from "../../Hook/useRequestData"
import { DivFundo } from "../Login/styled"
import { DivFundoPaginaFooter, TextoCarrinho } from "./styled"

export const MeuCarrinhoPage=()=>{
    const navigate=useNavigate()

    const {addProduto, setAddProduto, }=useContext(GlobalStateContext)

    const deletarProdutos = (produto) =>{
        const novoCarrinho = [...carrinho]

        const deletar = novoCarrinho.findIndex((p)=> p === produto)
        novoCarrinho.splice(deletar, 1)
        setAddProduto(novoCarrinho)
    }

    const carrinho = addProduto.map((item, index)=>{
        return(
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                    <Preco>
{/*                         <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
 */}                        <button onClick={()=>deletarProdutos(item)}>Remover</button>
                    </Preco>
                </InformacaoProduto>
            </CardItens>
        )
    })
    return(
        <DivFundoPaginaFooter>

            {carrinho. length > 0 ?
            <DivFundoPaginaFooter>
                {carrinho}
            </DivFundoPaginaFooter>
            :
            <TextoCarrinho>Carrinho vazio</TextoCarrinho>  
            }
            <BotaoLaranja>Confirmar</BotaoLaranja>
            <FooterComponents />
        </DivFundoPaginaFooter>

    )
}
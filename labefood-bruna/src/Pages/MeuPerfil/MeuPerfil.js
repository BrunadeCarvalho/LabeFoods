import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { FooterComponents } from "../../Components/Footer/Footer"
import { BASE_URL } from "../../Constants"
import { BotaoEditar, DadosPessoais, DadosStyled, DivBotao, EnderecoStyled, FundoStyled, HistoricoPedidos, RenderizarHistorico } from "./styled"
import {MdOutlineModeEdit} from  'react-icons/md'
import { goToCadastroPage, goToEditarPage } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import { GlobalStateContext } from "../../Global/GlobalStateContext"

export const MeuPerfilPage=()=>{
    const {dadosCliente }=useContext(GlobalStateContext)
    const [historico, setHistorico]=useState([])

    const navigate=useNavigate()
    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }

    const historicoDePedidos=()=>{
        axios.get(`${BASE_URL}/orders/history`, headers)
        .then((response)=>{
            setHistorico(response.data.orders)
        })
    }
    useEffect(()=>{
        historicoDePedidos()
    }, [])

    let mes = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    
    const renderizarPedidos=historico.map((item, index)=>{
        var data = new Date(item.createdAt)

        console.log(data)
        return(
            <RenderizarHistorico key={index}>
                <p className="nomeRestaurante">{item.restaurantName}</p>
                <p className="data">{data.getDate() + " de " +  mes [data.getMonth()] + " de " + data.getFullYear()}</p>
                <p className="subtotal">SUBTOTAL {item.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </RenderizarHistorico>
        )
    })

    return(
        <FundoStyled>
            <p className="meuPerfil">Meu perfil</p>
            <DadosStyled>
                <BotaoEditar>
                    <button onClick={()=>goToEditarPage(navigate)}> <MdOutlineModeEdit size="24px" /> </button>
                </BotaoEditar>
                <DadosPessoais>
                    <p className="nome">{dadosCliente.name}</p>
                    <p className="email">{dadosCliente.email}</p>
                    <p className="cpf">{dadosCliente.cpf}</p>
                </DadosPessoais>
            </DadosStyled>
            <EnderecoStyled>
                <DivBotao>
                    <button onClick={()=>goToCadastroPage(navigate)}> <MdOutlineModeEdit size="24px" /> </button>
                </DivBotao>
                <div>
                    <span className="titulo">Endereço cadastrado:</span>
                    <p className="endereco">{dadosCliente.address}</p>
                </div>
            </EnderecoStyled>
            <HistoricoPedidos>
                <div>
                    <p className="tituloHistorico">Historico de Pedidos</p>
                    <p>{renderizarPedidos}</p>
                </div>
            </HistoricoPedidos>
            <FooterComponents />                
        </FundoStyled>
    )
}
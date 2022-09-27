import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { FooterComponents } from "../../Components/Footer/Footer"
import { BASE_URL } from "../../Constants"
import { BotaoEditar, DadosPessoais, DadosStyled, DivBotao, EnderecoStyled, FundoStyled, HistoricoPedidos } from "./styled"
import {MdOutlineModeEdit} from  'react-icons/md'
import { goToCadastroPage, goToEditarPage } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import { GlobalStateContext } from "../../Global/GlobalStateContext"

export const MeuPerfilPage=()=>{
    const {dadosCliente, setDadosCliente}=useContext(GlobalStateContext)

    const navigate=useNavigate()

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
                <p className="tituloHistorico">Historico de Pedidos</p>
            </HistoricoPedidos>
            <FooterComponents />                
        </FundoStyled>
    )
}
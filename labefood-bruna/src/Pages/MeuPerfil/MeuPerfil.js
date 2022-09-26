import axios from "axios"
import { useEffect, useState } from "react"
import { FooterComponents } from "../../Components/Footer/Footer"
import { BASE_URL } from "../../Constants"
import { DivBotao, EnderecoStyled, FundoStyled, HistoricoPedidos } from "./styled"
import {MdOutlineModeEdit} from  'react-icons/md'
import { goToCadastroPage } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"

export const MeuPerfilPage=()=>{
    const [dadosCliente, setDadosCliente]=useState("")
    const navigate=useNavigate()

    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    const dadosDoPerfil=()=>{
        axios.get(`${BASE_URL}/profile`, headers).then((response)=>{
            setDadosCliente(response.data.user)
        })
    }
    useEffect(()=>{
        dadosDoPerfil()
    })


    return(
        <FundoStyled>
            <p className="meuPerfil">Meu perfil</p>
            <p className="nome">{dadosCliente.name}</p>
            <p className="email">{dadosCliente.email}</p>
            <p className="cpf">{dadosCliente.cpf}</p>
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
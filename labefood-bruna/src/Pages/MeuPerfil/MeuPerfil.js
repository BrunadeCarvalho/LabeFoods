import axios from "axios"
import { useState } from "react"
import { FooterComponents } from "../../Components/Footer/Footer"
import { BASE_URL } from "../../Constants"
import { DivFundoPaginaFooter } from "../MeuCarrinho/styled"

export const MeuPerfilPage=()=>{
    const [dadosCliente, setDadosCliente]=useState("")

    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    const dadosDoPerfil=()=>{
        axios.get(`${BASE_URL}/profile`, headers).then((response)=>{
            setDadosCliente(response.data)
        })
    }

    return(
        <DivFundoPaginaFooter>
            <h1> Meu Perfil </h1>

            <FooterComponents />                

        </DivFundoPaginaFooter>
    )
}
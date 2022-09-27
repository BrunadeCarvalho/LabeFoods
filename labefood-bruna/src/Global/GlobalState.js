import { useEffect, useState } from "react"
import { BASE_URL } from "../Constants"
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"
import { useFormulario } from "../Hook/formulario"
import { useNavigate } from "react-router-dom"


export const GlobalState = (props) =>{
    const [addProduto, setAddProduto]=useState(JSON.parse(localStorage.getItem("carrinho")) || [])
    const [isLoading, setIsLoading]=useState(false)
    const [busca, setBuscar] = useState("")
    const [infoRestaurante, setInfoRestaurante]=useState(JSON.parse(localStorage.getItem("restaurante")) || ("") )
    const [detalhesRestaurante, setDetalhesRestaurante]=useState([])
    const [dadosCliente, setDadosCliente]=useState("")
    const [endereco, setEndereco]=useState([])
    
    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }


    //MEU PERFIL:
    const dadosDoPerfil=()=>{
        axios.get(`${BASE_URL}/profile`, headers).then((response)=>{
            setDadosCliente(response.data.user)
        })
    }
    useEffect(()=>{
        dadosDoPerfil()
    })


    const data ={addProduto, setAddProduto, isLoading, setIsLoading, busca, setBuscar, infoRestaurante, setInfoRestaurante, setDetalhesRestaurante, detalhesRestaurante, 
        dadosCliente, setDadosCliente, setEndereco, }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}
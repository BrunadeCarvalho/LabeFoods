import { useEffect, useState } from "react"
import { BASE_URL } from "../Constants"
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"



export const GlobalState = (props) =>{
    const [addProduto, setAddProduto]=useState(JSON.parse(localStorage.getItem("carrinho")) || [])
    const [isLoading, setIsLoading]=useState(false)
    const [busca, setBuscar] = useState("")
    const [infoRestaurante, setInfoRestaurante]=useState(JSON.parse(localStorage.getItem("restaurante")) || ("") )
    const [detalhesRestaurante, setDetalhesRestaurante]=useState([])
    const [dadosCliente, setDadosCliente]=useState(JSON.parse(localStorage.getItem("dados")) || ("") )
    const [endereco, setEndereco]=useState([])
    const [pedidoEmAndamento, setPedidoEmAndamento]=useState([])

    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }

    //PEDIDO EM ANDAMENTO:
    const pedidoAtual = () => {
        axios.get(`${BASE_URL}/active-order`, headers)
        .then((response)=>{
            setPedidoEmAndamento(response.data.order)
        })
    }


    //MEU PERFIL:
    const dadosDoPerfil=()=>{
        axios.get(`${BASE_URL}/profile`, headers)
        .then((response)=>{
            setDadosCliente(response.data.user)
            localStorage.setItem("dados", JSON.stringify(response.data.user))
        })
    }

    useEffect(()=>{
        dadosDoPerfil()
        pedidoAtual()
    }, [])


    const data ={addProduto, setAddProduto, isLoading, setIsLoading, busca, setBuscar, infoRestaurante, setInfoRestaurante, setDetalhesRestaurante, detalhesRestaurante, 
        dadosCliente, setDadosCliente, setEndereco, pedidoEmAndamento}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}
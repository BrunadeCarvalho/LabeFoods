import { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = (props) =>{
    const [addProduto, setAddProduto]=useState(JSON.parse(localStorage.getItem("carrinho")) || [])
    const [isLoading, setIsLoading]=useState(false)
    const [busca, setBuscar] = useState("")
    const [infoRestaurante, setInfoRestaurante]=useState(JSON.parse(localStorage.getItem("restaurante")) || ("") )
    const [detalhesRestaurante, setDetalhesRestaurante]=useState([])

    const data ={addProduto, setAddProduto, isLoading, setIsLoading, busca, setBuscar, infoRestaurante, setInfoRestaurante, setDetalhesRestaurante, detalhesRestaurante}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}
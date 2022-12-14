import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../Constants"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../Routes/Coordinator"


export const useRequestData=()=>{
    const navigate=useNavigate();

    const [listaDeRestaurantes, setListaDeRestaurantes]=useState([])
    const [isLoading, setIsLoading]=useState(false)
    const [ListaDeCategorias, setListaDeCategorias] = useState([])
    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    //obter restaurante:
    const obterRestaurantes=()=>{
        setIsLoading(true)
        axios.get(`${BASE_URL}/restaurants`, headers).then((response)=>{
            setIsLoading(false)
            setListaDeRestaurantes(response.data.restaurants)
            const arrayCategorias = response.data.restaurants.map(item => item.category)
            setListaDeCategorias([...new Set(arrayCategorias)])
        }).catch((error)=>
            goToLoginPage(navigate)
        )
    }

    useEffect(()=>{
        obterRestaurantes()
    }, [])
    

    
    return [listaDeRestaurantes, isLoading, ListaDeCategorias, obterRestaurantes, setIsLoading]
}
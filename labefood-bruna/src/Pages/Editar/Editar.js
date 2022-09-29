import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../Constants"
import { useFormulario } from "../../Hook/formulario"
import axios from "axios"
import { HeaderStyled } from "../../Components/Header/Styled"
import {IoIosArrowBack} from 'react-icons/io'
import { DivFundo } from "../Login/styled"
import { NameInput } from "../../Components/inputs/name"
import { EmailInput } from "../../Components/inputs/email"
import { CPFInput } from "../../Components/inputs/cpf"
import { BotaoLaranja } from "../../Components/Botoes/styled"
import { toast } from "react-toastify";

export const EditarPage=()=>{
    const navigate=useNavigate()
    const [form, onChangeInputs, limparInputs] = useFormulario ({
        name:"",
        email:"",
        cpf:""
    })
    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    const [endereco, setEndereco]=useState([])

    const editarDados = (event)=>{
        event.preventDefault();
        axios.put(`${BASE_URL}/profile`,form,headers).then((response)=>{
            setEndereco()
            toast.success('Dados atualizado com sucesso', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });              
                navigate("/meu_perfil")
        }).catch((error)=>{
            toast.error('Os dados não foram atualizados', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });        })
    }

    const voltar=()=>{
        navigate(-1)
    }

    return(
        <DivFundo>
            <HeaderStyled>
                <button onClick={voltar}> <IoIosArrowBack size="24px" /></button>
                <p>Editar</p>
            </HeaderStyled>
            <form onSubmit={editarDados}>
                <NameInput
                    value={form.name}
                    onChange={onChangeInputs}
                    name="name"
                />
                <EmailInput
                    value={form.email}
                    onChange={onChangeInputs}
                    name="email"
                />
                <CPFInput
                    value={form.cpf}
                    onChange={onChangeInputs}
                    name="cpf"
                />
                <BotaoLaranja type="submit"> Salvar </BotaoLaranja>
            </form>
        </DivFundo>
    )
}
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BotaoLaranja } from "../../Components/Botoes/styled"
import { BairroInput } from "../../Components/inputs/Endereco/bairro"
import { CidadeInput } from "../../Components/inputs/Endereco/cidade"
import { ComplementoInput } from "../../Components/inputs/Endereco/complemento"
import { EnderecoInput } from "../../Components/inputs/Endereco/endereco"
import { EstadoInput } from "../../Components/inputs/Endereco/estado"
import { NumeroInput } from "../../Components/inputs/Endereco/numero"
import { BASE_URL, validarEndereco } from "../../Constants"
import { useFormulario } from "../../Hook/formulario"
import { BotaoEntrar, DivFormulario, DivFundo } from "../Login/styled"

export const CadastroPage=()=>{
    const navigate=useNavigate()
    const [form, onChangeInputs, limparInputs] = useFormulario ({
        street: "",
        number: "",
        complement: "",
        neighbourhood: "",
        city: "",
        state: ""
    })
    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    const [endereco, setEndereco]=useState([])

    const cadastrarEndereco = (event)=>{
        event.preventDefault();
        axios.put(`${BASE_URL}/address`,form,headers).then((response)=>{
            setEndereco()
            alert("Endereço cadastrado com sucesso")
            navigate("/feed")
        }).catch((error)=>{
            alert("Endereço não cadastrado")
        })

    }


    return(
        <DivFundo>
            <DivFormulario>
                <p>Meu endereço</p>
                <form onSubmit={cadastrarEndereco}>
                    <EnderecoInput 
                        value={form.street}
                        onChange={onChangeInputs}
                        name="street"
                    />

                    <NumeroInput
                        value={form.number}
                        onChange={onChangeInputs}
                        name="number"
                    />

                    <ComplementoInput 
                        value={form.complement}
                        onChange={onChangeInputs}
                        name="complement"
                    />

                    <BairroInput 
                        value={form.neighbourhood}
                        onChange={onChangeInputs}
                        name="neighbourhood"
                    />

                    <CidadeInput 
                        value={form.city}
                        onChange={onChangeInputs}
                        name="city"
                    />

                    <EstadoInput
                        value={form.state}
                        onChange={onChangeInputs}
                        name="state"
                    />
                    <BotaoLaranja type="submit"> Salvar </BotaoLaranja>

                </form>
            </DivFormulario>
        </DivFundo>
    )
}
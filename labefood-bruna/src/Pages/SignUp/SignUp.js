import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CPFInput } from "../../Components/inputs/cpf"
import { EmailInput } from "../../Components/inputs/email"
import { NameInput } from "../../Components/inputs/name"
import { PasswordInput } from "../../Components/inputs/password"
import { BASE_URL, validarCPF, validarEmail, validarName, validarPassword } from "../../Constants"
import { useFormulario } from "../../Hook/formulario"
import { DivFormulario, DivFundo } from "../Login/styled"
import ImagemLogin from '../../img/logo-future-eats-invert@3x.png'
import { BotaoLaranja } from "../../Components/Botoes/styled"


export const SignUpPage=()=>{
    const navigate=useNavigate();


    // utilização do hook personalizado para formulário.
    const [form, onChangeInputs, limparInputs] = useFormulario ({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })

    // validação dos dados enviados de acordo com o regex dentro das constants
    const [emailValido, setEmailValido]=useState(true)
    const [passwordValido, setPasswordValido]=useState(true)
    const [nameValido, setNameValido]=useState(true)
    const [cpfValido, setCPFvalido]=useState(true)

    const onSubmit = (event)=>{
        event.preventDefault();
        //regex:
        setEmailValido(validarEmail(form.email))
        setPasswordValido(validarPassword(form.password))
        setNameValido(validarName(form.name))
        setCPFvalido(validarCPF(form.cpf))

        axios.post(`${BASE_URL}/signup`,form)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            navigate("/cadastro")
        }).catch((error)=>{
            alert("Usuário já cadastrado")
        })
    }

    return(
        <DivFundo>
            <img src={ImagemLogin} alt="logo"/>
            <DivFormulario>
                <p> Cadastrar </p>
                <form onSubmit={onSubmit}>
                    <NameInput
                        value={form.name}
                        onChange={onChangeInputs}
                        validacao={nameValido}
                    />

                    <EmailInput 
                        value={form.email}
                        onChange={onChangeInputs}
                        validacao={emailValido}
                    />

                    <CPFInput
                        value={form.cpf}
                        onChange={onChangeInputs}
                        validacao={cpfValido}
                    />

                    <PasswordInput
                        value={form.password}
                        onChange={onChangeInputs}
                        validacao={passwordValido}
                    />

{/*                     <PasswordInput
                        value={form.password}
                        onChange={onChangeInputs}
                        validacao={passwordValido}
                    /> */}

                    <BotaoLaranja type="submit"> Criar </BotaoLaranja>
                </form>
            </DivFormulario>
        </DivFundo>
    )
}
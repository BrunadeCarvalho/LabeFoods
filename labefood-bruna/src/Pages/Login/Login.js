import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { EmailInput } from "../../Components/inputs/email"
import { PasswordInput } from "../../Components/inputs/password"
import { BASE_URL, validarEmail, validarPassword } from "../../Constants"
import { useFormulario } from "../../Hook/formulario"
import { goToSignupPage } from "../../Routes/Coordinator"
import { BotaoCadastrar, BotaoEntrar, DivBotoes, DivFormulario, DivFundo } from "./styled"
import ImagemLogin from '../../img/logo-future-eats-invert@3x.png'
import { BotaoLaranja } from "../../Components/Botoes/styled"


export const LoginPage=()=>{
    const navigate=useNavigate()


    // utilização do hook personalizado para formulário.
    const [form, onChangeInputs, limparInputs] = useFormulario ({
        email: "",
        password: ""
    })

    // validação dos dados enviados de acordo com o regex dentro das constants
    const [emailValido, setEmailValido]=useState(true)
    const [passwordValido, setPasswordValido]=useState(true)

    const onSubbmit = (event)=>{
        event.preventDefault();
        //regex:
        setEmailValido(validarEmail(form.email))
        setPasswordValido(validarPassword(form.password))

        axios.post(`${BASE_URL}/login`,form)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            navigate("/feed")
        }).catch((error)=>{
        })
    }

    return(
        <DivFundo>
            <img src={ImagemLogin} alt="logo"/>
            <DivFormulario>
                <p className="entrar">Entrar</p>
                <form onSubmit={onSubbmit}>
                    <EmailInput 
                        value={form.email}
                        onChange={onChangeInputs}
                        validacao={emailValido}
                    />

                    <PasswordInput
                        value={form.password}
                        onChange={onChangeInputs}
                        validacao={passwordValido}
                    />
                    <DivBotoes>
                        <BotaoLaranja type="submit"> Entrar </BotaoLaranja>
                    </DivBotoes>
                </form>
                <BotaoCadastrar onClick={(e)=> goToSignupPage(navigate)}>  Não possui cadastro? Clique aqui </BotaoCadastrar>
            </DivFormulario>
        </DivFundo>
    )
}
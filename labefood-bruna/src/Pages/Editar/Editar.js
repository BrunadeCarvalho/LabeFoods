import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../Constants"
import { useFormulario } from "../../Hook/formulario"
import axios from "axios"
import { NameInput } from "../../Components/inputs/name"
import { EmailInput } from "../../Components/inputs/email"
import { CPFInput } from "../../Components/inputs/cpf"
import { BotaoLaranja } from "../../Components/Botoes/styled"
import { toast } from "react-toastify";
import { Header } from "../../Components/Header/Header"
import { FooterComponents } from "../../Components/Footer/Footer"
import { DivFundoPaginaFooter } from "../../Components/FundoStyled/styled"

export const EditarPage=()=>{
    const navigate=useNavigate()
    const [form, onChangeInputs] = useFormulario ({
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

    const editarDados = (event)=>{
        event.preventDefault();
        axios.put(`${BASE_URL}/profile`,form,headers).then((response)=>{
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
            navigate(0)

        }).catch((error)=>{
            toast.error('Os dados não foram atualizados', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });        
        })
    }

    return(
        <DivFundoPaginaFooter>
            <Header>
                Editar
            </Header>
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
            <FooterComponents />
        </DivFundoPaginaFooter>
    )
}
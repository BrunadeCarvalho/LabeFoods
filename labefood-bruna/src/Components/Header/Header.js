import { useNavigate } from "react-router-dom"
import { HeaderStyled } from "./Styled"
import {IoIosArrowBack} from 'react-icons/io'

export const Header = (props)=>{
    const navigate=useNavigate()

    const voltar=()=>{
        navigate(-1)
    }

    return(
        <HeaderStyled elemento={props.children}>
            <button onClick={voltar}> <IoIosArrowBack size="24px" /></button>
            <p>{props.children}</p>
        </HeaderStyled>
    )
}
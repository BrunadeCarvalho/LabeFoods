import { useContext } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../Global/GlobalStateContext'
import { goToFeedPage, goToMeuCarrinhoPage, goToMeuPerfilPage } from '../../Routes/Coordinator'
import { Footer } from './styled'

export const FooterComponents = () =>{
    const {addProduto, setAddProduto, infoRestaurante }=useContext(GlobalStateContext)

    const navigate=useNavigate()

    const onClickCarrinho=(id) =>{
        goToMeuCarrinhoPage(navigate, id)
    }
    


    return(
    <Footer>
        <button onClick={()=> goToFeedPage(navigate)}> <AiOutlineHome size="27px"/> </button>
        <button onClick={()=>onClickCarrinho(infoRestaurante?.id)} > <BsCart3 size="27px"/> </button>
        <button onClick={()=> goToMeuPerfilPage(navigate)} > <AiOutlineUser size="27px"/> </button>
    </Footer>
    )
}
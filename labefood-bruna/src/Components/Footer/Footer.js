import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { goToFeedPage, goToMeuCarrinhoPage, goToMeuPerfilPage } from '../../Routes/Coordinator'
import { Footer } from './styled'

export const FooterComponents = () =>{
    const navigate=useNavigate()

    return(
    <Footer>
        <button onClick={()=> goToFeedPage(navigate)}> <AiOutlineHome size="27px"/> </button>
        <button onClick={()=> goToMeuCarrinhoPage(navigate)} > <BsCart3 size="27px"/> </button>
        <button onClick={()=> goToMeuPerfilPage(navigate)} > <AiOutlineUser size="27px"/> </button>
    </Footer>
    )
}
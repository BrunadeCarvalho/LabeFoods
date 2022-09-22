import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BuscarPage } from '../Pages/Busca/Buscar'
import { CadastroPage } from '../Pages/Cadastro/Cadastro'
import { EditarPage } from '../Pages/Editar/Editar'
import { FeedPage } from '../Pages/Feed/Feed'
import { LoginPage } from '../Pages/Login/Login'
import { MeuCarrinhoPage } from '../Pages/MeuCarrinho/MeuCarrinho'
import { MeuPerfilPage } from '../Pages/MeuPerfil/MeuPerfil'
import { Resultado } from '../Pages/Resultado/Resultado'
import { SignUpPage } from '../Pages/SignUp/SignUp'

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/buscar" element={<BuscarPage/>} />
                <Route path="/cadastro" element={<CadastroPage/>} />
                <Route path="/editar" element={<EditarPage/>} />
                <Route path="/feed" element={<FeedPage/>} />
                <Route path="/signup" element={<SignUpPage/>} />
                <Route path="/meu_carrinho" element={<MeuCarrinhoPage/>} />
                <Route path="/meu_perfil" element={<MeuPerfilPage/>} />
                <Route path="/resultado/:id" element={<Resultado/>} />
            </Routes>
        </BrowserRouter>
    )
}
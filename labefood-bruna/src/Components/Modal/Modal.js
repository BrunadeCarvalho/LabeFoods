import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BoxModal, ModalStyled, TypographyStyled } from './Styled';
import { GlobalStateContext } from '../../Global/GlobalStateContext';
import { useContext} from "react"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 328,
  height: 216,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {addProduto, setAddProduto }=useContext(GlobalStateContext)


  const adicionandoProdutoNoCarrinho = item => {
    let procurarProduto = addProduto.find(elem => elem.id === item.id)

    if(procurarProduto){
        procurarProduto.quantity += 1
        setAddProduto(addProduto)
        localStorage.setItem("carrinho", JSON.stringify(addProduto))
    } else {
        item = {
            ...item,
            quantity: 1
        }
        const newCarrinho = [...addProduto, item]
        setAddProduto(newCarrinho)
        localStorage.setItem("carrinho", JSON.stringify(newCarrinho))
    }
}

  return (
    <div>
      <Button onClick={handleOpen}>Adicionar</Button>
      <ModalStyled
        open={open}
        onClose={handleClose}
      >
        <BoxModal>
          <TypographyStyled >
            <h2>Selecione a quantidade desejada</h2>
            <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
{/*             <button onClick={()=>adicionandoProdutoNoCarrinhos(item)}>ADICIONAR AO CARRINHO</button>
 */}          </TypographyStyled>
        </BoxModal>
      </ModalStyled>
    </div>
  );
}

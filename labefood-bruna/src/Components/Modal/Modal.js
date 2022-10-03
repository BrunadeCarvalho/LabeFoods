import {useState}from 'react';
import Button from '@mui/material/Button';
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

export default function BasicModal({item, add}) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <select onChange={e => setQuantity(e.target.value)} value={quantity}>
                <option disabled type="Select" value={""}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>

            </select>
            <button onClick={() => {
              add(item, quantity)
              handleClose()
            }}>ADICIONAR AO CARRINHO</button>
          </TypographyStyled>
        </BoxModal>
      </ModalStyled>
    </div>
  );
}

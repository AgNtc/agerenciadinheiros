import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface ModalProps {
  isOpen: boolean;
  onHandleCloseModal: () => void;
}

export function NewTransactionModal({
  onHandleCloseModal,
  isOpen,
}: ModalProps) {
    const [title, setTitle]= useState('');
    const [value, setValue]= useState(0);
    const [category, setCategory] = useState('');
    const [type, setType]=useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
         event.preventDefault()
       const data ={
            title,
            value,
            category
        };
        
        api.post('/transactions', data)
    }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onHandleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onHandleCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
              console.log(type);
            }}
            isActive={type === "deposit"}
            ativeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
              console.log(type);
            }}
            isActive={type === "withdraw"}
            ativeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps{
    onHandleOpenModal: () => void;
}
export function Header({ onHandleOpenModal }:HeaderProps){

    return (
      <Container>
        <Content>
          <img src={logoImg} alt="dt money" />
          <button onClick={onHandleOpenModal}>Nova Transação</button>
        </Content>
      </Container>
    );
}
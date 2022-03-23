import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { HeaderProps } from '../../utils/types';

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
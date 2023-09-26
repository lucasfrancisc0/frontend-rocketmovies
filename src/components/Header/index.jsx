import { Container, Avatar } from './styles';
import { FiSearch } from 'react-icons/fi'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from '../Input';


export function Header() {

  return (

    <Container>


      <h2>
        RocketMovies
      </h2>


      <Input
        icon={FiSearch} 
        type='text'
        autoComplete='text'
        placeholder="Pesquisar pelo título"
        className="InputSearch"
      />


      <Avatar>

        <div>
          <h3>Lucas Gonçalves</h3>
          <span>Sair</span>
        </div>

        <img src={avatarPlaceholder} alt="" />

      </Avatar>

    </Container>
  );
};
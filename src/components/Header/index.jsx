import { Container, Avatar } from './styles';
import { FiSearch } from 'react-icons/fi'

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
      />

      <Avatar>
        <h3>Lucas Gonçalves</h3>
        <span>Sair</span>

        <div>
          <img src="" alt="" />
        </div>
      </Avatar>

    </Container>

  );
};
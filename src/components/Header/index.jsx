import { Container, Avatar } from './styles';

import { FiSearch } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from '../Input';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


export function Header({ value, onChange, ...rest }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${ user.avatar }` : avatarPlaceholder;

  function HandleSignOut() {
    signOut();
    navigate("/");
  };

  function HandleProfile() {
    navigate("/Profile");
  };


  return (

    <Container>


      <h2>
        RocketMovies
      </h2>


      <Input
        icon={FiSearch} 
        type='text'
        value={value}
        autoComplete='text'
        placeholder="Pesquisar pelo título"
        className="InputSearch"
        onChange={onChange}
        {...rest}
      />


      <Avatar>

        <div>
          <h3>{user.name}</h3>
          
          <span 
            onClick={HandleSignOut}
          >
            Sair
          </span>
        </div>

        <img 
          src={avatarURL} alt="imagem de usuário."
          onClick={HandleProfile}
        />

      </Avatar>

    </Container>
  );
};
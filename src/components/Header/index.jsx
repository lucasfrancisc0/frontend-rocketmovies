import { Container, Avatar } from './styles';

import { FiSearch } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from '../Input';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';


export function Header() {
  const { user } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${ user.avatar }` : avatarPlaceholder;


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

        <img src={avatarURL} alt="" />

      </Avatar>

    </Container>
  );
};
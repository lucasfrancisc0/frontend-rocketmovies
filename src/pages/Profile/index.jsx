import { Container, Form, Avatar, Informations } from './styles';
import { FiCamera, FiMail, FiUser, FiLock } from 'react-icons/fi'

import AvatarPlaceholder from '../../assets/avatar_placeholder.svg'
 
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { api } from '../../services/api';


export function Profile() {

  const { user, updateProfile } = useAuth();

  const [ name, setName ] = useState(user.name);
  const [ email, setEmail ] = useState(user.email);

  const [ password, setPassowrd ] = useState("");
  const [ old_password, setOld_password ] = useState("");

  const avatarURL = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : AvatarPlaceholder;
  const [ avatar, setAvatar ] = useState(avatarURL);
  const [ avatarFile, setAvatarFile ] = useState(null);


  async function HandleUpdate() {
    
    const userUpdated = {
      name,
      email,
      old_password,
      password,
      avatar: user.avatar
    };

    await updateProfile(userUpdated, avatarFile);

    setOld_password("");
    setPassowrd("");
  };

  function HandleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };


  return(
    <Container>

      <header>
        
        <ButtonText 
          data-arrow
          title="Voltar"
        />

      </header>

      <main>
        
        <Form>

          <Avatar>
            <img src={avatar} alt="Imagem de usuário." />

            <label htmlFor="fileAvatar">
              
              <input 
                id="fileAvatar"
                type="file"
                onChange={HandleChangeAvatar}
              />
              <FiCamera />
              
            </label>
          </Avatar>

          <Informations>

            <Input
              type="text"
              icon={FiUser}
              value={name}
              placeholder="Nome"
              autoComplete="username"
              onChange={e => setName(e.target.value)}
            />

            <Input
              type="email"
              icon={FiMail}
              value={email}
              placeholder="E-mail"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
            />


            <Input
              type="password"
              icon={FiLock}
              value={old_password}
              className="InputOldPassword"
              placeholder="Senha atual"
              autoComplete="current-password"
              onChange={e => setOld_password(e.target.value)}
            />

            <Input
              type="password"
              icon={FiLock}
              value={password}
              placeholder="Nova senha"
              autoComplete="new-password"
              onChange={e => setPassowrd(e.target.value)}
            />

          </Informations>

          <Button 
            title="Salvar"
            onClick={HandleUpdate}
          />

        </Form>
      </main>
    </Container>
  );
};
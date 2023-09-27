import { Container, Form, Avatar, Informations } from './styles';
import { FiCamera, FiMail, FiUser, FiLock } from 'react-icons/fi'

import AvatarPlaceholder from '../../assets/avatar_placeholder.svg'
 
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function Profile() {

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
            <img src={AvatarPlaceholder} alt="" />

            <label htmlFor="fileAvatar">
              
              <input 
                id="fileAvatar"
                type="file" 
              />
              <FiCamera />
              
            </label>
          </Avatar>

          <Informations>

            <Input
              type="text"
              icon={FiUser}
              readOnly
              value={`Lucas Gonçalves`}
              placeholder="Nome"
              autoComplete="username"
            />

            <Input
              type="email"
              icon={FiMail}
              readOnly
              value={`lucas@gmail.com`}
              placeholder="E-mail"
              autoComplete="email"
            />


            <Input
              type="password"
              icon={FiLock}
              className="InputOldPassword"
              placeholder="Senha atual"
              autoComplete="current-password"
            />

            <Input
              type="password"
              icon={FiLock}
              placeholder="Nova senha"
              autoComplete="new-password"
            />

          </Informations>

          <Button 
            title="Salvar"
          />

        </Form>
      </main>
    </Container>
  );
};
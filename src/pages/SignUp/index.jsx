import { Container, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp() {

  return(

    <Container>

      <main>

        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Form>

          <Input
            icon={FiUser}
            type="text"
            placeholder="Nome"
            autoComplete="username"
          />
          
          <Input
            icon={FiMail}
            type="email"
            placeholder="E-mail"
            autoComplete="email"
          />

          <Input
            icon={FiLock}
            type="passoword"
            placeholder="Senha"
            autoComplete="current-password"
          />


          <Button 
            title="Cadastrar"
          />

        </Form>

        <div className="BackSignIn">
          <ButtonText 
            title="Voltar para o login"
            data-arrow="true"
          />
        </div>

      </main>

      <Background />

    </Container>

  );
};
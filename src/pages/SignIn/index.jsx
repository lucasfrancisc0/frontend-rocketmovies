import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText';


export function SignIn() {

  return (

    <Container>

      <main>

        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Form>
          
          <Input 
            icon={FiMail} 
            type="email" 
            placeholder="E-mail" 
            autoComplete="email"
          />

          <Input 
            icon={FiLock} 
            type="password" 
            placeholder="Senha" 
            autoComplete="current-password"
          />

          <Button title="Entrar"/>
        
        </Form>


        <div className="ButtonCreate">

        <ButtonText 
          title="Criar conta"
          $IsActive 
        />

        </div>

      </main>

      <Background />

    </Container>
  );
};
import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';


export function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");


  function HandleSignIn() {
    signIn(email, password);

    setEmail("");
    setPassword("");
  };


  function HandleSignUp() {
    navigate("/register");
  };


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
            value={email}
            placeholder="E-mail" 
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />

          <Input 
            icon={FiLock} 
            type="password" 
            value={password}
            placeholder="Senha" 
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />

          <Button 
            title="Entrar"
            onClick={HandleSignIn}
          />
        
        </Form>


        <div className="ButtonCreate">
          <ButtonText 
            title="Criar conta"
            onClick={HandleSignUp}
          />
        </div>
        

      </main>

      <Background />

    </Container>
  );
};
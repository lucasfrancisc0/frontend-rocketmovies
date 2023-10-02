import { Container, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';


export function SignUp() {
  const navigate = useNavigate();

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");


  async function HandleSignUp() {

    try{
      const response = await api.post("/users", { name, email, password });

      setName("");
      setEmail("");
      setPassword("");

      alert(response.data.message);
      HandleGoSignIn();

    }catch(error) {

      if(error.response) {
        alert(error.response.data.message);

      }else {
        alert("Não foi possivel realizar a criação de um usuário.");
      };
    };
  };
  
  
  function HandleGoSignIn() {
    navigate(-1);
  };

  
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
            onChange={e => setName(e.target.value)}
          />
          
          <Input
            icon={FiMail}
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            icon={FiLock}
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />


          <Button 
            title="Cadastrar"
            onClick={HandleSignUp}
          />

        </Form>

        <div className="BackSignIn">
          <ButtonText 
            title="Voltar para o login"
            data-arrow="true"
            onClick={HandleGoSignIn}
          />
        </div>

      </main>

      <Background />

    </Container>

  );
};
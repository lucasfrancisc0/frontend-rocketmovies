import { Container, Title } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Stars } from '../../components/Stars';


export function Details() {

  return(

    <Container>

      <Header/>


      <main>

      <ButtonText 
        title="Voltar"
        data-arrow
      />

      <Title>
        <h1>Interestelar</h1>

        <Stars value={Number(4)}/>
      </Title>
      
    


      </main>



    </Container>
  );
};
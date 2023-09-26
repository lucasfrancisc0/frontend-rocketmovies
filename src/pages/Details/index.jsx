import { Container, Title, Creation, BookMarks } from './styles';
import { FiClock } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';



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

        <Stars value={Number(5)}/>
      </Title>
      

      <Creation>

        <img src={avatarPlaceholder} />
        <p>Lucas Gonçalves da Luz</p>
        <FiClock />
        <span>23/05/22 às 08:00</span>

      </Creation>

      <BookMarks>
        <Tag title="Ficção Científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
      </BookMarks>

      </main>



    </Container>
  );
};
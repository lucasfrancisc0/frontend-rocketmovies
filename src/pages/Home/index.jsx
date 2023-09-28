import { Container, Content, Button, Add, Movies } from './styles';
import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie'


export function Home() {

  return(

    <Container>

      <Header />

      <main>
        <Content>

          <Add>
            <h1>Meus filmes</h1>


            <Button>
              <FiPlus />

              <button 
                type="button"
              >
                Adicionar filme
              </button>
            </Button>
          </Add>


          <Movies>
            <Movie 
              title="Título"
              data-rating={4}
              data-description={`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é`}
              data-tags={["Fccção", "Drama", "Família"]}
            />

            <Movie 
              title="Título"
              data-rating={4}
              data-description={`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é`}
              data-tags={["Fccção", "Drama", "Família"]}
            />

            <Movie 
              title="Título"
              data-rating={4}
              data-description={`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é`}
              data-tags={["Fccção", "Drama", "Família"]}
            />
          </Movies>
          
          
          <footer>
            <p><span>Copyright ©</span> <strong>2023,</strong> ALL RIGHTS RESERVED</p>
          </footer>

        </Content>
      </main>
    </Container>
  );
};
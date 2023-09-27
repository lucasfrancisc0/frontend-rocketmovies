import { Container, Form, Rating } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Stars } from '../../components/Stars';

import { useState } from 'react';

export function New() {

  const [ rating, setRating ] = useState(Number(0))

  return(

    <Container>

      <Header/>

      <main>

        <ButtonText
          data-arrow
          title="Voltar"
        />

        <h1>Novo filme</h1>


        <Form>

          <div className='RatingTitle'>

            <Input 
              type='text'
              placeholder="Título"
              autoComplete='text'
            />


            <Rating>
              <Stars 
                value={rating}

                onClick={ (e) => {

                    if(e.target.getAttribute('data-value') !== rating ) {
                      setRating(e.target.getAttribute('data-value')) 

                    } else {
                      setRating(Number(0))
                    };
                  }
                }
              />
            </Rating>
          </div>

         

        </Form> 
      </main>

    </Container>

  );
};
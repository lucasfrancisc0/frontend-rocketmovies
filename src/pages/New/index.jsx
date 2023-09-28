import { Container, Content, Form, Rating, BookMarks, Buttons } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Stars } from '../../components/Stars';
import { TextArea } from '../../components/TextArea'; 
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';

import { useState } from 'react';


export function New() {

  const [ rating, setRating ] = useState(Number(0));
  
  const [ tags, setTags ] = useState([]);
  const [ newTag, setNewTag ] = useState("")


  function HandleAddTag() {

    if(tags.includes(newTag) || newTag === "") {
      setNewTag("")
      return 
    }

    
    setTags(prevState => [...prevState, newTag]);
    setNewTag("")
  };
  

  function HandleRemoveTag(tagDELETED) {

    setTags(prevState => prevState.filter(tag => tag !== tagDELETED));
  };


  return(

    <Container>

      <Header/>

      <Content className='Content'>
        


        <main>

            <ButtonText
              data-arrow
              title="Voltar"
              className='BackHome'
            />

          <Form>
            <h1>Novo filme</h1>

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

            <TextArea 
              placeholder="Observações"
            />

            <section>
              <h2>Marcadores</h2>

              <BookMarks>
                {
                  tags && tags.map((tag, index) => {
                    return (
                      <li key={`tag_${index}`}>

                        <MovieItem 
                          value={tag}
                          onClick={() => HandleRemoveTag(tag)}
                        />

                      </li>
                    );
                  })
                }

                <MovieItem
                  data-isnew
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={HandleAddTag}
                />

              </BookMarks>

              <Buttons>
                <Button 
                  className = "ButtonDelete"
                  title="Excluir filme"
                />

                <Button 
                  title="Salvar informações"
                />
              </Buttons>
              
            </section>
          </Form>
        </main>
      </Content>
    </Container>
  );
};
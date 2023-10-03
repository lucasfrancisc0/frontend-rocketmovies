import { Container, Content, Form, Rating, BookMarks, Buttons } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Stars } from '../../components/Stars';
import { TextArea } from '../../components/TextArea'; 
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';

import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


export function New() {
  const navigate = useNavigate();

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ rating, setRating ] = useState(Number(0));
  
  const [ tags, setTags ] = useState([]);
  const [ newTag, setNewTag ] = useState("");


  function HandleAddTag() {

    if(tags.includes(newTag) || newTag === "") {
      setNewTag("");
      return ;
    };

    
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function HandleRemoveTag(tagDELETED) {
    setTags(prevState => prevState.filter(tag => tag !== tagDELETED));
  };

  async function HandleCreateMovie() {

    if(newTag) {
      return alert("Confirme o marcador para continar.");
    };

    try {
      const response = await api.post("/movies", { title, description, rating, tags });
      alert(response.data.message);

    }catch(error) {

      if(error.response) {
        alert(error.response.data.message);
      
      }else{
        alert("Não foi possível adicionar um novo filme.");
      };
    };

    setTitle("");
    setDescription("");
    setRating("");
    setTags([]);
  };

  async function HandleRemoveMovie() {
    setTitle("");
    setDescription("");
    setRating("");
    setTags([]);
  };

  function HandleBack() {
    navigate(-1);
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
              onClick={HandleBack}
            />

          <Form>
            <h1>Novo filme</h1>

            <div className='RatingTitle'>

              <Input 
                type='text'
                value={title}
                autoComplete='text'
                placeholder="Título"
                onChange={ e => setTitle(e.target.value) }
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
              value={description}
              placeholder="Observações"
              onChange={ e => setDescription(e.target.value) }
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
                  onClick={HandleAddTag}
                  onChange={e => setNewTag(e.target.value)}
                />

              </BookMarks>

              <Buttons>
                <Button 
                  title="Excluir informações"
                  className = "ButtonDelete"
                  onClick={HandleRemoveMovie}
                />

                <Button 
                  title="Salvar informações"
                  onClick={HandleCreateMovie}
                />
              </Buttons>
              
            </section>
          </Form>
        </main>
      </Content>
    </Container>
  );
};
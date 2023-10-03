import { Container, Title, Creation, BookMarks } from './styles';
import { FiClock } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'; //test

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';


export function Details() {

  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL)

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ rating, setRating ] = useState("");
  const [ created_at, setCreated_at ] = useState("")

  const [ tags, setTags ] = useState([]);

  function HandleBack() {
    navigate(-1);
  };

  async function HandleDeleteMovie() {
    
    if(window.confirm("Deseja realmente deletar o filme?")) {

      await api.delete(`/movies?movie_id=${params.movie_id}`);
      alert("Filme deletado com sucesso.");

      navigate(-1);
    };
  };


  useEffect(() => { //search movie
    async function fetchMovie() {

      const response = await api.get(`/movies?movie_id=${params.movie_id}&title=${""}`);
      const { title, description, rating, tags, created_at } = response.data.movies[0];

      setTitle(title);
      setDescription(description);
      setRating(Number(rating));
      setTags(tags);
      setCreated_at(created_at)

    }fetchMovie();

  }, []);

  return(

    <Container>

      <Header/>

      <section>

        <main>

          <ButtonText 
            title="Voltar"
            data-arrow
            onClick={HandleBack}
          />

          <Title>
            <h1>{ title }</h1>

            <Stars value={rating}/>
          </Title>


          <Creation>

            <img src={avatar} />

            <p>{ user.name }</p>

            <FiClock />

            <span>{ created_at }</span>

          </Creation>

          <BookMarks>
            {
              tags && tags.map((tag, index) => {
                return(
                  <li key={`tag_${index}`} >

                    <Tag title={ tag.name }/>

                  </li>
                );
              })
            }
          </BookMarks>


          <p>
            { description }
          </p>
            

        </main>
        
        <div className="ButtonDelete">
          <Button 
            title="Excluir Filme"
            onClick={HandleDeleteMovie}
          />
        </div>

        
      </section>
    </Container>
  );
};
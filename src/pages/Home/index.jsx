import { Container, Content, Button, Add, Movies } from './styles';
import { FiPlus } from 'react-icons/fi';
import { TbMovieOff } from 'react-icons/tb';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { api } from '../../services/api';


export function Home() {
  const navigate = useNavigate()

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");


  function HandleGOnewMovie() {
    navigate("/New");
  };


  useEffect(() => { // seacrh movies

    async function fetchMovies() {

      const response = await api.get(`/movies?movie_id&title=${title}`);
      setMovies(response.data.movies);

    }; fetchMovies();

  }, [title]);

  return(

    <Container>

      <Header 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <main>
        <Content>

          <Add>
            <h1>Meus filmes</h1>

            <Button onClick={HandleGOnewMovie}>
              <FiPlus />

              <button type="button">
                Adicionar filme
              </button>

            </Button>
          </Add>


          <Movies>

            {
              movies.length > 0 
              ? 
              movies.map((movie, index) => {
                return(
                  <li
                    key={`movie_${index}`}
                    className="movie" 
                  >
                    <Movie 
                      data-id={movie.id}
                      title={movie.title}
                      data-tags={movie.tags}
                      data-rating={movie.rating}
                      data-description={movie.description}
                    />
                  </li>
                );
              }) 
              
              : 
              
              <div id='NotFind'>
                <TbMovieOff />
                <p>Nenhum filme econtrado.</p>
              </div>
            }

          </Movies>
          
          
          <footer>
            <p><span>Copyright ©</span> <strong>2023,</strong> ALL RIGHTS RESERVED</p>
          </footer>

        </Content>
      </main>
    </Container>
  );
};
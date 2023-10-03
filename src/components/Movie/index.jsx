import { Container, Bookmarks } from './styles';

import { Stars } from '../Stars';
import { Tag } from '../Tag';

import { useNavigate } from 'react-router-dom';


export function Movie({ title, ...rest}) {
  const navigate = useNavigate();

  const rating = rest['data-rating'];
  const description = rest['data-description'];
  const tags = rest['data-tags'];
  const movieId = rest['data-id'];

  function HandleDetails(movieId) {
    navigate(`/Details/${movieId}`);
  };


  return(

    <Container 
      title={title}
      data-tags={tags}
      data-id={movieId}
      data-rating={rating}
      data-description={description}
      onClick={() => {HandleDetails(movieId)}}
      {...rest}
    >

      <h2>{ title }</h2>

      <Stars 
        value={rating}
      />

      <p>
        {description}
      </p>
      

      <Bookmarks>
        {
          tags.length > 0 && tags.map((tag, index) => {
            return (
              <li key={`tag_${index}`}>

                <Tag 
                  data-inmovie
                  title={tag.name}
                />

              </li>
            );
          })
        }

      </Bookmarks>



    </Container>
  );
};
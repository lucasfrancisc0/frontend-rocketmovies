import { Container, Bookmarks } from './styles';

import { Stars } from '../Stars';
import { Tag } from '../Tag';


export function Movie({ title, ...rest}) {

  const rating = rest['data-rating'];
  const description = rest['data-description'];
  const tags = rest['data-tags'];

  return(

    <Container 
      title={title}
      data-rating={rating}
      data-description={description}
      data-tags={tags}
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
                  title={tag}
                />

              </li>
            );
          })
        }
      </Bookmarks>



    </Container>
  );
};
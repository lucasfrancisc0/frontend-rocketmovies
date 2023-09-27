import { Container } from './styles';

import starFull from '../../assets/star-full.svg';
import starEmpty from '../../assets/star-empty.svg';

 
export function Stars({ value = 0, ...rest }) {


  function structuredStars(value) {
    let countStars = [];

    for(let i = 0; i < 5; i++) {

      const star = {
        url: i < value ? starFull : starEmpty
      };

      countStars = [...countStars, star]
    };

    
    return countStars;
  };

  
  const verifiedStars = structuredStars(value);


  return(

    <Container>

      {
        verifiedStars.map((item, index) => {
          return (

            <li 
              key={`star_${index}`}
              {...rest}
            >

              <img
                data-value={index + 1} 
                src={item.url}
              />

            </li>
          );
        })
      }

    </Container>
  );
};
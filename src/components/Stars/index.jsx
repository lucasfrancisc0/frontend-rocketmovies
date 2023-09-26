import { Container } from './styles';

import starFull from '../../assets/star-full.svg';
import starEmpty from '../../assets/star-empty.svg';

 
export function Stars({ value = 0 }) {


  function verifyStars(value) {
    let countStars = [];

    for(let i = 0; i < 5; i++) {

      if(i < value) {
        countStars = [...countStars, {url: starFull}];

      }else {
        countStars = [...countStars, {url: starEmpty}];
      };
    };

    return countStars
  };

  const verifiedStars = verifyStars(value);

  return(

    <Container>

      {
        verifiedStars.map((item, index) => {
          return (
            <li key={`star_${index}`}>

              <img src={item.url} />
            </li>
          );
        })
      }

    </Container>
  );
};
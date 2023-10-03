import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';

export function ButtonText({ onClick, title, ...rest }) {

  const arrow = rest['data-arrow'];

  return(

    <Container 
      data-arrow={arrow}
      onClick={onClick}
    >

      {
        arrow && <FiArrowLeft />
      }

      <button {...rest}>
        {title}
      </button>
      

    </Container>

  );
};
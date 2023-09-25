import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';

export function ButtonText({ title, ...rest }) {

  const arrow = rest['data-arrow'];

  return(

    <Container data-arrow={arrow}>

      {
        arrow && <FiArrowLeft />
      }

      <button {...rest}>
        {title}
      </button>
      

    </Container>

  );
};
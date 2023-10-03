import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';

export function ButtonText({ onClick, title, ...rest }) {

  const arrow = rest['data-arrow'];

  return(

    <Container 
      data-arrow={arrow}
    >

      {
        arrow && <FiArrowLeft onClick={onClick} />
      }

      <button 
        onClick={onClick}
        {...rest}
      >
        {title}
      </button>
      

    </Container>

  );
};
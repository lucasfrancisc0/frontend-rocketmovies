import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';


export function MovieItem({ value, onClick, ...rest }) {

  let isnew = rest['data-isnew']

  return (
    <Container data-isnew={isnew}>

      {
        !isnew && <p value={value}>{value}</p>
      }

      {
        isnew &&

          <input 
            type="text" 
            placeholder="Novo marcador"
            value={value}
            { ...rest }
          />
      }

      <button
        type="button"
        onClick={onClick}
      >

        {
          isnew ? <FiPlus /> : <FiX />
        }

      </button>
    </Container>
  );
};
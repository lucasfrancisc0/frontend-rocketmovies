import { Container } from './styles';


export function Tag({ title, ...rest }) {

  const inmovie = rest['data-inmovie']

  return(

    <Container 
      title={title}
      data-inmovie={inmovie}  
    >

      { title }

    </Container>

  );
};
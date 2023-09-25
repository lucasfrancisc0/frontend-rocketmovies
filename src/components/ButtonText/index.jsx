import { Container } from './styles';


export function ButtonText({ isActive: $IsActive, title, ...rest }) {

  return(

    <Container 
      type='button' 
      $IsActive={$IsActive}
      {...rest}
    >
      
      {title}

    </Container>

  );
};
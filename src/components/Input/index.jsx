import { Container } from './styles';


export function Input({ icon: Icon, autoComplete="text", type="text", ...rest }) {
  return (

    <Container >

      {
        Icon && <Icon />
      }


      <input 
        type={type}
        autoComplete={autoComplete}
        {...rest}
      />

    </Container>
  );
};
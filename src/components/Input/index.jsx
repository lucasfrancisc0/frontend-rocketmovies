import { Container } from './styles';


export function Input({ icon: Icon, autoComplete="text", type="text", className,...rest }) {
  return (

    <Container className={className}>

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
import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundMovies.png';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax(35rem, 63.7rem) auto;

  grid-template-areas: 
  "signUp background"
  ;


  > main {
    grid-area: signUp;

    max-width: 36rem;
    padding: 1rem;

    margin: auto;

    h1 {
      font-size: 4.8rem;
      font-weight: 700;

      color: ${({theme }) => theme.COLORS.PINK_ISHRED};
    };


    p {
      font-size: 1.4rem;

      color: ${({theme }) => theme.COLORS.WHITE_SUBTITLE};
    };


    h2 {
      margin: 4.8rem 0 4.8rem;

      font-size: 2.4rem;
      font-weight: 500;
    };
  };


  .BackSignIn {
    margin-top: 4.2rem;

    div {
      justify-content: center;
    };
  };
`;


export const Form = styled.form`

  > div {
    margin-bottom: .8rem;
  }

  > button {
    margin-top: .8rem;
  }
`;


export const Background = styled.div`
  grid-area: background;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
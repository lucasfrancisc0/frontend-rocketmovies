import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundMovies.png';


export const Container = styled.div`
  width: 100%;
  height: 100vh;


  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax( 35rem, 63.7rem ) auto;

  grid-template-areas: 
  "login background"
  ;


  > main {
    grid-area: login;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 35rem;
    height: 100%;

    margin: auto;
    padding: 1rem;

  

    h1 {  
      font-size: 4.8rem;
      font-weight: 700;
      
      color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
    };


    p {
      font-size: 1.4rem;
      padding-bottom: 4.8rem;

      color: ${({ theme }) => theme.COLORS.WHITE_SUBTITLE};
    };


    h2 {
      font-size: 2.4rem;
      padding-bottom: 4.8rem;
    };
  };


  .ButtonCreate {
    padding-top: 4.2rem;
    text-align: center;
  }
`;


export const Form = styled.form`

  > div {
    margin-bottom: .8rem;
  };

  > button {
    margin-top: 1.6rem;
  };
`;

export const Background = styled.div`

  grid-area: background;
  
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

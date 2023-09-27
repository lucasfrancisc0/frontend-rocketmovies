import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-columns: auto;

  grid-template-areas: 
    "header"
    "content"
  ;


  > main {
    padding: 4rem 2rem;
    grid-area: content;


    h1 {
      font-size: 3.6rem;
      font-weight: 500;

      margin-top: 2.4rem;
      margin-bottom: 4rem;
    };
  };
`;


export const Form = styled.form`
  width: 111.3rem;


  .RatingTitle {
    display: flex;
    align-items: center;

    gap: 4rem;
  };
`;


export const Rating = styled.div`
  padding: 1.8rem 1.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 1rem;


  img {
    cursor: pointer;
  };

  img:hover {
    transition: .6s;
    filter: brightness(.7)
  };
`;
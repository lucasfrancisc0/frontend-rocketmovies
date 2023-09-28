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

  .Content::-webkit-scrollbar-thumb {
    border-radius: .8rem; 

    background-color: ${({ theme }) => theme.COLORS.PINK_ISHRED}; 
  };

  .Content::-webkit-scrollbar {
    width: .8rem;
    background: transparent;
  };
`;


export const Content = styled.div`
  grid-area: content;
  
  overflow-y: scroll;

  > main {
    max-width: 111.3rem;


    margin: auto;
    padding: 4rem 2rem;

    section h2 {
      margin: 4rem 0 2.4rem;

      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    };
  };
`


export const Form = styled.form`
  

  h1 {
      font-size: 3.6rem;
      font-weight: 500;

      margin-top: 2.4rem;
      margin-bottom: 4rem;
    };


  .RatingTitle {
    display: flex;
    align-items: center;

    gap: 4rem;
  };


  > textarea {
    height: 27.4rem;

    margin-top: 4rem;
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


export const BookMarks = styled.ul`

  display: flex;
  align-items: center;

  flex-wrap: wrap;

  list-style: none;

  background: ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 1rem;

  padding: 1.6rem;
  gap: 2.4rem;
`;


export const Buttons = styled.div`
  display: flex;
  
  gap: 4rem;
  padding-top: 4rem;

  .ButtonDelete {
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
  }
`;
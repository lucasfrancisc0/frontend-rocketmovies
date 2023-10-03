import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-columns: minmax(75rem, auto);

  grid-template-areas: 
    "header"
    "content"
  ;

  > section {
    width: 100%;
    height: 100%;

    grid-area: content;
    overflow-y: auto;


    main {
      max-width: 111.3rem;
      min-height: 65rem;
      
      padding: 4rem 2rem ;
      margin: auto;

      p {
        text-align: justify;
      };
    };

    .ButtonDelete {
      width: 100%;
      padding: 0 2rem;
      
      display: flex;
      justify-content: center;

      > button {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
        
        max-width: 111.3rem;
      };
    };
  };


  > section::-webkit-scrollbar-thumb {
    border-radius: .8rem; 

    background-color: ${({ theme }) => theme.COLORS.PINK_ISHRED}; 
  };

  > section::-webkit-scrollbar {
    width: .8rem;
    background: transparent;
  };
`;


export const Title = styled.div`
  display: flex;
  align-items: center;

  margin: 2.4rem 0;
  gap: 1.9rem;
`;


export const Creation = styled.div`
  display: flex;
  align-items: center;

  gap: .8rem;
  margin-bottom: 4rem;

  > img {
    border-radius: 50%;

    width: 2rem;
    height: 2rem;
  };

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};

    width: 2rem;
    height: 2rem;
  };
`;


export const BookMarks = styled.ul`
  display: flex;
  gap: .8rem;

  list-style: none;

  margin-bottom: 4rem;
`;
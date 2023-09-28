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
    grid-area: content;

    width: 100%;
    height: 100%;
    
    overflow-y: scroll;
  };


  > main::-webkit-scrollbar-thumb {
    border-radius: .8rem; 

    background-color: ${({ theme }) => theme.COLORS.PINK_ISHRED}; 
  };

  > main::-webkit-scrollbar {
    width: .8rem;
    background: transparent;
  };
`;


export const Content = styled.section`
  max-width: 112.1rem;
  height: 100%;

  padding: 4.7rem 2.4rem 10rem;
  margin: auto;

  > footer {
    width: 100%;
    height: 11.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5rem 0;

    border-top-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-top-width: 1px;
    border-top-style: solid;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > p span {
      color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
    };

    > p strong {
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    };
  };
`;


export const Add = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 4.05rem;

  > h1 {
    font-size: 3.2rem;
  };

  > div:hover {
    transition: .5s;
    filter: brightness(0.8);
  };
`;


export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.6rem 3.2rem;
  gap: .8rem;

  border-radius: .8rem;

  cursor: pointer;
  transition: .5s;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.PINK_ISHRED};

  
  > button {
    background: transparent;
    border: none;
  };

  > svg {
    width: 1.6rem;
    height: 1.6rem;
  };
`;


export const Movies = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  > div:hover {
    transition: .7s;
    filter: brightness(0.8);
  }
`;  
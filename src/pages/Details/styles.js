import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;

  grid-template-areas: 
    "header"
    "content"
  ;

  > main {
    grid-area: content;
  }
`;


export const Title = styled.div`
  margin: 2.4rem 0;

  display: flex;
  align-items: center;

  gap: 1.9rem;

`

export const Creation = styled.div`
  display: flex;
  align-items: center;

  gap: .8rem;
  margin-bottom: 4rem;

  > img {
    width: 2rem;
    height: 2rem;
  };

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};

    width: 2rem;
    height: 2rem;
  };

  > span {

  }
`;


export const BookMarks = styled.div`
  display: flex;
  gap: .8rem;
`;
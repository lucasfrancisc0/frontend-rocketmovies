import styled from 'styled-components';


export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 100%;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 6.4rem;

  
  h2 {
    font-size: 2.4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
  };

  .InputSearch  {
    max-width: 63rem;
    height: 5.6rem;
  };
`;


export const Avatar = styled.div`
  
  display: flex;
  gap: .9rem;

  align-items: center;


  > div {
    text-align: end;

    h3 {
      font-size: 1.4rem;
      font-weight: 700;
    };

    span {
      cursor: pointer;
      
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.4rem;
    };
  };



  > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
  };
`;
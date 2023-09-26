import styled from 'styled-components';


export const Container = styled.header`
  grid-area: header;

  width: 100%;
  min-width: 75rem;
  height: 100%;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 6.4rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};


  h2 {
    cursor: pointer;

    font-size: 2.4rem;
    font-weight: 700;

    transition: filter 0.2s;

    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
  };


  h2:hover {
    filter: brightness(0.8);
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


    span:hover {
      filter: brightness(0.8);
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


  > img:hover {
    cursor: pointer;
    filter: brightness(0.85)
  };
`;
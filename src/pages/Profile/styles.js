import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 14.4rem auto;
  grid-template-columns: auto;

  grid-template-areas: 
    "header"
    "content"
  ;

  > header {
    grid-area: header;
    
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    padding-left: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  };

  > main {
    grid-area: content;

    padding: 1rem;
  }
`;


export const Form = styled.form`
  max-width: 36rem;
  height: 100%;

  margin: auto;
`;


export const Avatar = styled.div`
  position: relative;

  width: 18.6rem;
  height: 18.6rem;

  margin: -9.3rem auto 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  };
  

  > label {
    position: absolute;

    width: 4.8rem;
    height: 4.8rem;

    margin-right: 0;

    margin-top: -5.2rem;
    margin-left: 13.7rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK_ISHRED};

    
    input {
      display: none;
    };

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    };
  };

  > label:hover {
    filter: brightness(.9);
  };
`;


export const Informations = styled.div`

  display: flex;
  flex-direction: column;

  gap: .8rem;
  margin-bottom: 2.4rem;

  .InputOldPassword {
    margin-top: 1.6rem;
  };
`;
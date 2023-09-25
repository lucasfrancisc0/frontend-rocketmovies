import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 1.7rem 1.6rem 1.8rem 1.6rem;
  gap: 1.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 1rem;

  
  > input {
    width: 100%;

    background: transparent;
    
    outline: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
  };


  > svg {
    width: 2rem;
    height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  };
`;

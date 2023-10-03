import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: .8rem;

  > button { 
    cursor: pointer;
    width: max-content;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
  };

  > svg {
    cursor: pointer;
    
    width: 1.6rem;
    height: 1.6rem;

    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
  };

  :hover {
    filter: brightness(0.9);
  }
`;
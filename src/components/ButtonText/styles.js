import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  gap: .8rem;

  > button { 
    width: max-content;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
  };

  > svg {
    width: 1.6rem;
    height: 1.6rem;

    color: ${({ theme }) => theme.COLORS.PINK_ISHRED};
  };
`;
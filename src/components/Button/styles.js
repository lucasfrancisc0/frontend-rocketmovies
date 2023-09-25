import styled from 'styled-components';


export const Container = styled.button`

  width: 100%;
  padding: 1.6rem 0  1.5rem;

  background: ${({ theme }) => theme.COLORS.PINK_ISHRED};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  font-weight: 500;

  border: none;
  border-radius: 1rem;
`;
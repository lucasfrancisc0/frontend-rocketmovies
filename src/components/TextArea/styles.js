import styled from 'styled-components';


export const Container = styled.textarea`
  width: 100%;
  height: 100%;

  padding: 1.9rem 1.6rem;
  border-radius: 1rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  outline: none;
  border: none;
  resize: none;
`;
import styled from 'styled-components';


export const Container = styled.div`
  width: max-content;

  border-radius: 1rem;
  padding: .8rem 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
  color: ${({ theme }) => theme.COLORS.WHITE_TAG};
`;
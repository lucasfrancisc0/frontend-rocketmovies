import styled from 'styled-components';


export const Container = styled.button`
  width: max-content;

  background: none;
  border: none;

  color: ${({ theme, $IsActive }) => $IsActive ? theme.COLORS.PINK_ISHRED : theme.COLORS.GRAY_200};
`;
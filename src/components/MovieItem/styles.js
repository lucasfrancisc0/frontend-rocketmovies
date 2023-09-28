import styled from 'styled-components';


export const Container = styled.div`
  width: max-content;

  display: flex;
  align-items: center;

  gap: 1.6rem;
  padding: 1.4rem;

  background: ${({ theme, 'data-isnew': isnew }) => isnew ? "transparent" : theme.COLORS.BACKGROUND_800};

  border: ${({ theme, 'data-isnew': isnew }) => isnew ? `dashed 2px ${theme.COLORS.GRAY_200}` : "none"};
  border-radius: 1rem;


  > button {
      width: 2.2rem;
      height:2.4rem;

      background-color: transparent;
      border: none;

    svg {
      color: ${({ theme, 'data-isnew': isnew }) => isnew ? theme.COLORS.PINK_ISHRED : theme.COLORS.RED};
    };
   
  };

  > input {
    width: 12rem;
    background-color: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};
    
    border: none;
    outline: none
  };
`;
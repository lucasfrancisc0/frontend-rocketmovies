import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  padding: 3.2rem;  
  border-radius: 1.6rem;

  transition: .7s;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    > h2 {
      font-size: 2.4rem;
      font-weight: 700;

      margin-bottom: .8rem;
    };

    > p {
      max-width: 100%;
      display: -webkit-box;
      
      overflow: hidden;
      text-overflow: ellipsis;

      word-wrap: break-word;

      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin: 1.7rem 0 2.8rem;
  };
`;




export const Bookmarks = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: .8rem;
  list-style: none;
`;
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsContainer = styled.div`
  width: 50%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-size: ${({ theme }) => theme.styles.font.medium};
    font-weight: 800;
    margin-left: 10px;
  }
`;

export const ArrowBackContainer = styled.div`
  width: 50%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    font-size: ${({ theme }) => theme.styles.font.medium};
    cursor: pointer;
  }
`;

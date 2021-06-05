import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
`;

export const Divisor = styled.div`
  width: 100%;
  height: calc(60% - 30px);
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
`;

export const GraphicContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

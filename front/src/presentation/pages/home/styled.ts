import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100%;

  padding: 20px;
  box-sizing: border-box;
`;

export const Divisor = styled.div`
  width: 100%;
  height: calc(65% - 30px);
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
`;

export const GraphicContainer = styled.div`
  width: 65%;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  position: relative;
  padding: 10px;
  box-shadow: 0.5px 0.5px 10px ${({ theme }) => theme.styles.colors.gray.light};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

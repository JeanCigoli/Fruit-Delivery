import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 24vw;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  padding: 1vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  box-shadow: 0.5px 0.5px 10px ${({ theme }) => theme.styles.colors.gray.light};
  gap: 15px;
`;

export const Icon = styled.div<{ color: 'pink' | 'purple' | 'orange' }>`
  width: 70px;
  height: 100%;
  background-color: ${({ theme, color }) => theme.styles.colors[color].light};
  border-radius: ${({ theme }) => theme.styles.spacing.short};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: ${({ theme }) => theme.styles.font.medium};
    color: ${({ theme }) => theme.styles.colors.white.normal};
  }
`;

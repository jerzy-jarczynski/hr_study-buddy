import styled from 'styled-components';

const mapAverageToColor = (average, theme) => {
  if (average >= 0 && average <= 2.0) {
    return theme.colors.error;
  } else if (average > 2.0 && average <= 4.0) {
    return theme.colors.warning;
  } else if (average > 4.0) {
    return theme.colors.success;
  } else {
    return theme.colors.error;
  }
};

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ average, theme }) => mapAverageToColor(average, theme)};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

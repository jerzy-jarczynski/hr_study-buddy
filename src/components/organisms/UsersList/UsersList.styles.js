import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 27px 30px 4px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
  padding: 33px 0 26px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
`;

export const Attendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: 0;
`;

export const UserWrapper = styled.div`
  padding: 0 14px 0 24px;
`;

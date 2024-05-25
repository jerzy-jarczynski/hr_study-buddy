import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, Name, Attendance, UserWrapper } from './UsersListItem.styles';
import Grade from 'components/atoms/Grade/Grade';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Grade average={average} />
    <UserWrapper>
      <Name>{name}</Name>
      <Attendance>attendance: {attendance}</Attendance>
    </UserWrapper>
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

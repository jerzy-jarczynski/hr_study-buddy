import React from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI()
      .then((data) => {
        this.setState({ isLoading: false });
        this.setState({ users: data });
      })
      .then((err) => console.log(err));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed');
    }
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    console.log(filteredUsers);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading...' : 'Users List'}</h1>
        <StyledList>
          {this.state.users.map((userData, index) => (
            <UsersListItem deleteUser={this.deleteUser} key={index} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;

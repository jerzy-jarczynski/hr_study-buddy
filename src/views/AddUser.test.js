import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input With Button', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>,
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grażyna');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>,
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Grażyna');
    expect(newUser).not.toBeInTheDocument();
  });
});

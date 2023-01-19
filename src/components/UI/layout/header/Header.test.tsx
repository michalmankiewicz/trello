import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import TestWrapper from '../../../../utils/testUtils/testUtils';
import userEvent from '@testing-library/user-event';

beforeEach(() => history.pushState({}, '', '/'));

describe('Header component', () => {
  test('renders Header', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    const logo = screen.getByText('Trello');
    const logIn = screen.getByText('Log in');
    const signUp = screen.getByText('Sign up');

    expect(logo).toBeInTheDocument();
    expect(logIn).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
  });

  test('renders appropiate navlinks when click Log in', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    const logIn = screen.getByText('Log in');
    const signUp = screen.getByText('Sign up');

    userEvent.click(logIn);

    expect(logIn).not.toBeInTheDocument();
    expect(signUp).not.toBeInTheDocument();

    expect(window.location.pathname).toContain('/auth');
  });

  test('renders appropiate translate when clicks on language button', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    const languageButton = screen.getByText('EN');
    userEvent.click(languageButton);

    const logIn = screen.getByText('Zaloguj się');
    const signUp = screen.getByText('Zarejestruj się');

    expect(logIn).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
  });
});

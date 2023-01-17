import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import TestWrapper from '../../../../utils/testUtils/testUtils';

// import userEvent from '@testing-library/user-event';
// import { debug } from 'console';

jest.mock('react-i18next', () => ({
  initReactI18next: { type: '3rdParty', init: jest.fn() },
  useTranslation: () => ({ t: (key: string) => key }),
  Trans: ({ children }: { children: React.ReactNode }) => children,
}));

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

  // test('renders appropiate navlinks when click Log in', () => {
  //   render(
  //     <TestWrapper>
  //       <Header />
  //     </TestWrapper>
  //   );

  //   const logIn = screen.getByText('Log in');
  //   const signUp = screen.getByText('Sign up');

  //   userEvent.click(logIn);

  //   expect(logIn).not.toBeInTheDocument();
  //   expect(signUp).not.toBeInTheDocument();
  //   // TODO Can it be prettier
  //   expect(global.window.location.pathname).toContain('/auth');
  // });

  // test('renders appropiate translate when clicks on language button', () => {
  //   render(
  //     <TestWrapper>
  //       <Header />
  //     </TestWrapper>
  //   );

  //   debug(undefined, 999);
  //   // TODO Testing I18next
  //   const languageButton = screen.getByText('EN');
  //   userEvent.click(languageButton);

  //   // const changedLanguageButton = screen.getAllByText('PL');

  //   // expect().toBeCalledTimes(1);

  //   // const logIn = screen.getByText('Zaloguj się');
  //   // const signUp = screen.getByText('Zarejestruj się');

  //   // expect(logIn).toBeInTheDocument();
  //   // expect(signUp).toBeInTheDocument();
  //   // expect(changedLanguageButton).toBeInTheDocument();
  // });
});

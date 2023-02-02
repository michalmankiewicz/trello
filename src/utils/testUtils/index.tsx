import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from '../../store';
import i18next from '../../i18n';

type Props = { children?: React.ReactNode };

function TestWrapper(props: Props) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>{props.children}</BrowserRouter>;
      </I18nextProvider>
    </Provider>
  );
}

export default TestWrapper;

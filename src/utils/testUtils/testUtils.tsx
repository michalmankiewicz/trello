import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from '../../i18n';

type Props = { children?: React.ReactNode };

function TestWrapper(props: Props) {
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>{props.children}</BrowserRouter>;
    </I18nextProvider>
  );
}

export default TestWrapper;

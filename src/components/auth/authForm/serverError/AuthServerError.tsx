import React from 'react';
import { ServerError, ServerErrorMessage } from './AuthServerError.styled';
import { WarningCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type Props = {
  errorMessage: string;
};

function AuthServerError(props: Props) {
  const { t } = useTranslation();

  return (
    <ServerError>
      <WarningCircle weight="bold" />
      <ServerErrorMessage>{t(props.errorMessage)}</ServerErrorMessage>
    </ServerError>
  );
}

export default AuthServerError;

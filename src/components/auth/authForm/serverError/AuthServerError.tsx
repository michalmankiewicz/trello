import React from 'react';
import { ServerErrorMessage } from './AuthServerError.styled';
import { WarningCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type Props = {
  errorMessage: string;
};

function AuthServerError(props: Props) {
  const { t } = useTranslation();

  return (
    <ServerErrorMessage>
      <WarningCircle weight="bold" />
      {t(props.errorMessage)}
    </ServerErrorMessage>
  );
}

export default AuthServerError;

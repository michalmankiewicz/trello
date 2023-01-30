import React from 'react';
import { ServerErrorMessage } from './ServerError.styled';
import { WarningCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type Props = {
  errorMessage: string;
};

function ServerError(props: Props) {
  const { t } = useTranslation();

  return (
    <ServerErrorMessage>
      <WarningCircle weight="bold" />
      {t(props.errorMessage)}
    </ServerErrorMessage>
  );
}

export default ServerError;

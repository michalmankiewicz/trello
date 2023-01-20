import { Link, useNavigate } from 'react-router-dom';
import Input from '../input/Input';
import {
  AuthContainer,
  Controls,
  SubmitButton,
  Title,
  ToggleParagraph,
  ServerErrorMessage,
} from './AuthForm.styled';
import { useTranslation, Trans } from 'react-i18next';
import { validationObj } from '../../utils/authUtils/authUtils';
import { useForm } from 'react-hook-form';

import { Spinner } from 'phosphor-react';

import { useLocation } from 'react-router';

type Props = {
  onSubmitFormHandler: (data: FormData) => void;
  isError: boolean;
  isLoading: boolean;
};

type FormData = {
  name: string;
  login: string;
  password: string;
};

function AuthForm(props: Props) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { pathname } = useLocation();

  // Conditional rendering
  const type = pathname === '/signup' ? 'signUp' : 'logIn';
  const toPath = pathname === '/signup' ? '/login' : '/signup';

  let paragraph: JSX.Element;
  if (type === 'signUp') {
    paragraph = (
      <Trans i18nKey={`${type}.toggleText`}>
        Already have an account?&nbsp;
        <Link to={toPath}>Sign in</Link>
      </Trans>
    );
  } else
    paragraph = (
      <Trans i18nKey={`${type}.toggleText`}>
        Don&apos;t have account yet?&nbsp;
        <Link to={toPath}>Register</Link>
      </Trans>
    );

  return (
    <AuthContainer onSubmit={handleSubmit(props.onSubmitFormHandler)}>
      <Title>{t(`${type}.title`)} </Title>
      <Controls>
        {type === 'signUp' && (
          <Input
            {...register('name', validationObj)}
            error={errors.name}
            type="text"
            label={t('signUp.name')}
          />
        )}
        <Input
          {...register('login', validationObj)}
          error={errors.login}
          type="text"
          label="Login"
        />
        <Input
          {...register('password', validationObj)}
          error={errors.password}
          type="password"
          label={t('signUp.password')}
        />
      </Controls>
      {props.isError && <ServerErrorMessage>Error</ServerErrorMessage>}
      <SubmitButton>
        {props.isLoading ? <Spinner weight="bold" /> : t(`${type}.title`)}
      </SubmitButton>
      <ToggleParagraph>{paragraph}</ToggleParagraph>
    </AuthContainer>
  );
}

export default AuthForm;

import { Link } from 'react-router-dom';
import Input from '../../input/Input';
import { AuthContainer, Controls, SubmitButton, Title, ToggleParagraph } from './AuthForm.styled';
import { useTranslation, Trans } from 'react-i18next';
import { validationObj } from '../../../utils/authUtils';
import { useForm } from 'react-hook-form';
import { Spinner } from 'phosphor-react';
import { useLocation } from 'react-router';
import { FormData } from '../../../types/auth';
import AuthServerError from './serverError/AuthServerError';

type Props = {
  onSubmitFormHandler: (data: FormData) => void;
  isError: boolean;
  isLoading: boolean;
  errorMessage: string;
};

function AuthForm(props: Props) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
      {props.isError && <AuthServerError errorMessage={props.errorMessage} />}
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

      {props.isLoading ? (
        <SubmitButton disabled>
          <Spinner weight="bold" />
        </SubmitButton>
      ) : (
        <SubmitButton>{t(`${type}.title`)}</SubmitButton>
      )}
      <ToggleParagraph>{paragraph}</ToggleParagraph>
    </AuthContainer>
  );
}

export default AuthForm;

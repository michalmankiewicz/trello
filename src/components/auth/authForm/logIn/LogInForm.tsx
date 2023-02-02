import { Link } from 'react-router-dom';
import Input from '../../../input/Input';
import { AuthContainer, Controls, SubmitButton, Title, ToggleParagraph } from '../AuthForm.styled';
import { useTranslation, Trans } from 'react-i18next';
import { validationObj } from '../../../../utils/authUtils';
import { useForm } from 'react-hook-form';
import { Spinner } from 'phosphor-react';
import { LogInData } from '../../../../types/auth';
import AuthServerError from '../serverError/AuthServerError';

type Props = {
  onSubmitFormHandler: (data: LogInData) => void;
  isError: boolean;
  isLoading: boolean;
  errorMessage: string;
};

function LogInForm(props: Props) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInData>();

  return (
    <AuthContainer onSubmit={handleSubmit(props.onSubmitFormHandler)}>
      <Title>{t(`logIn.title`)} </Title>
      {props.isError && <AuthServerError errorMessage={props.errorMessage} />}
      <Controls>
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
          label={t('logIn.password')}
        />
      </Controls>

      {props.isLoading ? (
        <SubmitButton disabled>
          <Spinner weight="bold" />
        </SubmitButton>
      ) : (
        <SubmitButton>{t(`logIn.title`)}</SubmitButton>
      )}
      <ToggleParagraph>
        <Trans i18nKey={`logIn.toggleText`}>
          Don&apos;t have account yet?&nbsp;
          <Link to="/signup">Register</Link>
        </Trans>
      </ToggleParagraph>
    </AuthContainer>
  );
}

export default LogInForm;

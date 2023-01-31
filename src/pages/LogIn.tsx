import { useState } from 'react';
import { useGetTokenMutation } from '../store/auth/authApiSlice';
import { handleErrorMessage } from '../utils/authUtils';
import { LogInData } from '../types/auth';
import LogInForm from '../components/auth/authForm/logIn/LogInForm';
import { logIn } from '../services/auth';

function LogIn() {
  const [getToken, { isError: isLoginError, isLoading: isLoginLoading }] = useGetTokenMutation();
  const [errorMessage, setErrorMessage] = useState('');

  const submitFormHandler = async (data: LogInData) => {
    try {
      const { login, password } = data;
      const tokenData: { token: string } = await getToken({ login, password }).unwrap();
      logIn(tokenData.token);
    } catch (err) {
      console.error(err);
      setErrorMessage(handleErrorMessage(err));
    }
  };

  return (
    <LogInForm
      onSubmitFormHandler={submitFormHandler}
      isLoading={isLoginLoading}
      isError={isLoginError}
      errorMessage={errorMessage}
    />
  );
}

export default LogIn;

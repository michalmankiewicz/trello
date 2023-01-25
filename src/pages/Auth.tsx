import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthForm from '../components/auth/authForm/AuthForm';
import { useCreateNewAccountMutation, useGetTokenMutation } from '../store/auth/authApiSlice';
import { useAppDispatch } from '../types/redux';
import { login as loginFn } from '../store/auth/authSlice';
import { handleErrorMessage } from '../utils/authUtils';
import { FormData } from '../types/auth';

function Auth() {
  const [createNewAccount, { isError: isSignUpError, isLoading: isSignUpLoading }] =
    useCreateNewAccountMutation();
  const [getToken, { isError: isLoginError, isLoading: isLoginLoading }] = useGetTokenMutation();

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [errorMessage, setErrorMessage] = useState('');

  const submitFormHandler = async (data: FormData) => {
    try {
      const { name, login, password } = data;
      if (pathname === '/signup') await createNewAccount({ name, login, password }).unwrap();
      const tokenData: { token: string } = await getToken({ login, password }).unwrap();

      dispatch(loginFn(tokenData.token));
    } catch (err) {
      console.error(err);
      setErrorMessage(handleErrorMessage(err));
    }
  };

  return (
    <AuthForm
      onSubmitFormHandler={submitFormHandler}
      isLoading={isSignUpLoading || isLoginLoading}
      isError={isSignUpError || isLoginError}
      errorMessage={errorMessage}
    />
  );
}

export default Auth;

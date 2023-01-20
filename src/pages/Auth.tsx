import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';

import { useCreateNewAccountMutation, useGetTokenMutation } from '../store/auth/authApiSlice';

type FormData = {
  name: string;
  login: string;
  password: string;
};

function Auth() {
  const [createNewAccount, { data: accountData }] = useCreateNewAccountMutation();
  const [getToken, { data: tokenData, isError, isLoading }] = useGetTokenMutation();

  console.log(accountData, tokenData);
  const navigate = useNavigate();

  const submitFormHandler = async (data: FormData) => {
    const { name, login, password } = data;
    await createNewAccount(data);
    await getToken({ login, password });
    navigate('/boards');
  };

  return (
    <AuthForm onSubmitFormHandler={submitFormHandler} isLoading={isLoading} isError={isError} />
  );
}

export default Auth;

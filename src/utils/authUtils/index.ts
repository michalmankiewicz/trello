const translationType = 'inputError';

export const validationObj = {
  required: `${translationType}.required`,
  minLength: {
    value: 3,
    message: `${translationType}.min`,
  },
  maxLength: {
    value: 10,
    message: `${translationType}.max`,
  },
};

export const handleErrorMessage = (error: unknown): string => {
  const translationType = 'authServerError';
  const defaultMessage = 'default';

  let errorMessage = '';
  if (error && typeof error === 'object' && 'status' in error) {
    console.log('trigered', error.status);

    if (error.status === 400) {
      errorMessage = defaultMessage;
    } else if (error.status === 403) {
      errorMessage = 'error403';
    } else if (error.status === 409) errorMessage = 'error409';
    else errorMessage = defaultMessage;
  } else return (errorMessage = defaultMessage);

  return translationType.concat('.', errorMessage);
};

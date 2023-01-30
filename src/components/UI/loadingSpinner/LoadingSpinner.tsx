import { Spinner } from 'phosphor-react';
import React from 'react';
import { SpinnerContainer } from './LoadingSpinner.styled';

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}

export default LoadingSpinner;

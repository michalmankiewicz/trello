import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestWrapper from '../../../../utils/testUtils';

import AuthServerError from './AuthServerError';

describe('AuthServerError component', () => {
  test('Renders error', () => {
    render(
      <TestWrapper>
        <AuthServerError errorMessage={'authServerError.default'} />
      </TestWrapper>
    );

    const error = screen.getByText('Something went wrong!');

    expect(error).toBeInTheDocument();
  });
});

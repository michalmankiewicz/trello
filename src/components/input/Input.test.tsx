import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestWrapper from '../../utils/testUtils';
import Input from './Input';

describe('serverError component', () => {
  test('Renders error', () => {
    render(
      <TestWrapper>
        <Input error={undefined} label="Name" />
      </TestWrapper>
    );

    const label = screen.getByText('Name');

    expect(label).toBeInTheDocument();
  });
});

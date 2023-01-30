import { spin } from '../../../utils/styledCompentsUtils/animations';
import styled from '../../../utils/styledCompentsUtils/styled-components';

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & svg {
    font-size: 10rem;
    animation: ${spin} 2s infinite linear;
  }
`;

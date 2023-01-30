import styled from 'styled-components';
import { spin } from '../../../utils/styledCompentsUtils/animations';
import theme from '../../../utils/styledCompentsUtils/theme';

export const LoadingOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${theme.colors.grey1};
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 10rem;
    animation: ${spin} 2s infinite linear;
  }
`;

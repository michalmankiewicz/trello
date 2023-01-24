import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../GlobalStyles';
import theme from '../../../utils/styledCompentsUtils/theme';

export const LayoutContainer = styled.div`
  height: 100vh;
  background-color: ${theme.colors.background};

  @media (max-width: ${MEDIA_QUERIES.w64}) {
    height: auto;
    min-height: 100vh;
  }
`;

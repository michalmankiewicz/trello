import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../GlobalStyles';
import theme from '../../../utils/styledCompentsUtils/theme';

const LayoutContainer = styled.div`
  height: 100vh;
  background-color: ${theme.colors.background};

  @media (max-width: ${MEDIA_QUERIES.w64}) {
    height: auto;
  }
`;

type Props = {
  children?: React.ReactNode;
};

function Layout(props: Props) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{props.children}</Main>
    </LayoutContainer>
  );
}

export default Layout;

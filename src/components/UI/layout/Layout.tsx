import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import { LayoutContainer } from './Layout.styled';

function Layout(props: React.PropsWithChildren) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{props.children}</Main>
    </LayoutContainer>
  );
}

export default Layout;

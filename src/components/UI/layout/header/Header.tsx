import { useState } from 'react';
import {
  HeaderContainer,
  Logo,
  Menu,
  NavList,
  NavItem,
  LanguageButton,
  ActionsMobile,
} from './Header.styled';
import { Link } from 'react-router-dom';
import { List } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../types/redux';
import { logout as logoutFn } from '../../../../store/auth/authSlice';

function Header() {
  const { i18n, t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const toggleLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('pl');
    else if (i18n.language === 'pl') i18n.changeLanguage('en');

    closeMenu();
  };

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  let content: JSX.Element;
  if (isAuth) {
    content = (
      <>
        <NavItem
          onClick={() => {
            closeMenu();
            dispatch(logoutFn());
          }}
        >
          <Link to="/">{t(`header.signOut`)}</Link>
        </NavItem>
        <NavItem onClick={closeMenu}>
          <Link to="/boards">{t(`header.boards`)}</Link>
        </NavItem>
        <NavItem onClick={closeMenu}>
          <Link to="/edit-profile">{t(`header.editProfile`)}</Link>
        </NavItem>
      </>
    );
  } else {
    content = (
      <>
        <NavItem onClick={closeMenu}>
          <Link to="/login">{t(`header.logIn`)}</Link>
        </NavItem>
        <NavItem onClick={closeMenu}>
          <Link to="/signup">{t(`header.signUp`)}</Link>
        </NavItem>
      </>
    );
  }

  return (
    <HeaderContainer>
      <Logo onClick={closeMenu} to="/">
        <img src="assets/kanban_logo.svg" />
        <p>Trello</p>
      </Logo>
      <Menu isMenuOpened={isMenuOpened}>
        <nav>
          <NavList>{content}</NavList>
        </nav>
        <LanguageButton onClick={toggleLanguage}>{i18n.language.toUpperCase()}</LanguageButton>
      </Menu>
      <ActionsMobile onClick={toggleMenu}>
        <List weight="bold" />
      </ActionsMobile>
    </HeaderContainer>
  );
}

export default Header;

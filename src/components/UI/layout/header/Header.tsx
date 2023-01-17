import { useState } from 'react';
import {
  HeaderContainer,
  Logo,
  Menu,
  Nav,
  NavList,
  NavItem,
  LanguageButton,
  ActionsMobile,
} from './Header.styled';
import { Link, useLocation } from 'react-router-dom';
import { List } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { navLinkOptions } from '../../../../utils/navLinksUtils/navLinkUtils';

function Header() {
  const { i18n, t } = useTranslation();

  // Changing language
  const toggleLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('pl');
    else if (i18n.language === 'pl') i18n.changeLanguage('en');

    closeMenu();
  };

  // Mobile menu visibility
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpened) setIsMenuOpened(false);
    else setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  // Nav Links rendering
  const { pathname: currentPath } = useLocation();
  const navLinks = navLinkOptions.filter((link) => link.paths.some((el) => el === currentPath));

  return (
    <HeaderContainer>
      <Logo onClick={closeMenu}>
        <Link to="/">Trello</Link>
      </Logo>
      <Menu isMenuOpened={isMenuOpened}>
        <Nav>
          <NavList>
            {navLinks?.map((el) => (
              <NavItem onClick={closeMenu} key={el.camelCase}>
                <Link to={el.toPath}>{t(`header.${el.camelCase}`)}</Link>
              </NavItem>
            ))}
          </NavList>
        </Nav>
        <LanguageButton onClick={toggleLanguage}>{i18n.language.toUpperCase()}</LanguageButton>
      </Menu>
      <ActionsMobile onClick={toggleMenu}>
        <List weight="bold" />
      </ActionsMobile>
    </HeaderContainer>
  );
}

export default Header;

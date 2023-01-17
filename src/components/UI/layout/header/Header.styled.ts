import styled from 'styled-components';
import theme from '../../../../utils/styledCompentsUtils/theme';
import { MEDIA_QUERIES } from '../../../../GlobalStyles';

const mobileHeaderHigh = '7rem';
const menuGap = '2rem';

export const HeaderContainer = styled.header`
  background-color: ${theme.colors.primary};
  min-height: ${mobileHeaderHigh};
  height: 8vh;
  width: 100%;
  padding: 0 5%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${theme.colors.white};
  position: relative;
`;

export const Logo = styled.h2`
  font-size: 4rem;

  &:hover {
    cursor: pointer;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

type MenuProps = {
  isMenuOpened: boolean;
};

export const Menu = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  gap: ${menuGap};

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    display: ${(p) => (p.isMenuOpened ? 'flex' : 'none')};

    position: absolute;
    flex-direction: column;
    align-items: flex-end;

    top: 0;
    right: 0;
    padding: 2rem 3rem 2rem 5rem;
    transform: translateY(${mobileHeaderHigh});
    background-color: ${theme.colors.primaryShaded};
  }
`;

export const Nav = styled.nav``;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${menuGap};

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const NavItem = styled.li`
  font-size: 2.4rem;

  &:hover {
    cursor: pointer;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;
export const LanguageButton = styled.button`
  font-size: 1.6rem;
  padding: 1.2rem;
  border: none;
  border-radius: 50px;

  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export const ActionsMobile = styled.button`
  background-color: transparent;
  color: inherit;
  border: none;
  display: none;

  & svg {
    font-size: 4rem;
  }

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    display: block;
  }
`;

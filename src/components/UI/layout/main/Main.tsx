import styled from 'styled-components';

export const MainContainer = styled.main`
  margin: 1rem auto 0 auto;
  max-width: 140rem;
  width: 85%;

  @media (max-width: 64rem) {
    margin: 3rem auto 0 auto;
  }
`;

type Props = {
  children?: React.ReactNode;
};

const Main = (props: Props) => {
  return <MainContainer>{props.children}</MainContainer>;
};

export default Main;

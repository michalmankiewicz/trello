import { MEDIA_QUERIES } from '../../GlobalStyles';
import styled from '../../utils/styledCompentsUtils/styled-components';
import theme from '../../utils/styledCompentsUtils/theme';

export const AuthContainer = styled.form`
  margin: 3rem auto 0 auto;
  padding: 3rem;
  width: 30%;
  min-width: 40rem;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.144);

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    width: 95%;
    min-width: 0;
  }
`;

export const Title = styled.h3`
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 2rem;
`;
export const Controls = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: none;
  margin-bottom: 2.4rem;
`;
export const SubmitButton = styled.button`
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  /* display: block; */
  width: 100%;
  padding: 1.6rem 3.2rem;
  font-size: 2rem;
  border-radius: ${theme.borderRadius};
  margin-bottom: 1.6rem;

  &:hover {
    cursor: pointer;
  }

  & svg {
    font-size: 2rem;
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ToggleParagraph = styled.p`
  font-size: 1.6rem;
  text-align: center;
  padding: 1rem 0 0 0;
  border-top: 2px solid #ddd;

  & a {
    color: ${theme.colors.primary};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.primaryShaded};
      cursor: pointer;
    }
  }
`;

export const ServerErrorMessage = styled.h3`
  color: #ff7675;
  font-size: 2rem;
  text-align: center;
`;

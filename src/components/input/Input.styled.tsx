import styled from 'styled-components';
import theme from '../../utils/styledCompentsUtils/theme';

export const InputContainer = styled.div`
  position: relative;
  height: 7rem;
`;

export const Label = styled.label`
  position: absolute;
  color: ${theme.colors.grey2};
  background-color: ${theme.colors.white};
  left: 5%;
  top: -10px;
  padding: 0 0.6rem;
  font-size: 1.6rem;
`;

export const InputField = styled.input`
  width: 100%;
  border-radius: ${theme.borderRadius};
  border: 3px solid ${theme.colors.grey3};
  font-size: 2rem;
  padding: 1.2rem 2.4rem;
  margin-bottom: 0.4rem;
`;

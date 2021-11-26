import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { backgroundColor, secondaryTextColor } from '../../styles/theme';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 542px;
  padding: 0 16px;
  margin: 24px auto;
  color: ${secondaryTextColor};
  box-sizing: border-box;

  @media (max-width: ${breakpoints.table}) {
    max-width: ${breakpoints.table};
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 1010px;
  }
`;

export const Label = styled.label`
  margin-right: 16px;
  flex-basis: 25px;
  
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 0;
  color: white;
  background-color: ${backgroundColor};
`;

export const option = styled.option`
    
`;

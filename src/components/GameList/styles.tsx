import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

export const List = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style-type: none;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.table}) {
    max-width: ${breakpoints.table};
  }
  @media (min-width: ${breakpoints.desktop}) {
    max-width: ${breakpoints.desktop};
  }
`;

export const ListItem = styled.div`
  max-width: 365px;
  margin-bottom: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: ${breakpoints.table}) {
    max-width: 332px;
  }

  @media (min-width: ${breakpoints.table}) {
    max-width: 312px;
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import {
  backgroundColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  tertiaryTextColor,
} from '../../styles/theme';

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  background-color: ${secondaryColor};
  border-radius: 4px;
  text-decoration: none;
  
`;

export const Img = styled.img`
  width: 100%;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 510;
  color: ${primaryTextColor};

  @media (min-width: ${breakpoints.table}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Details = styled.div`
  padding: 20px;

  @media (min-width: ${breakpoints.table}) {
    white-space: nowrap;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${secondaryTextColor};

  @media (min-width: ${breakpoints.table}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Footer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Genre = styled.p`
  padding: 2px 4px;
  margin: 0 8px 0 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${tertiaryTextColor};
  background-color: ${backgroundColor};
  position: absolute;
  right: 0;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

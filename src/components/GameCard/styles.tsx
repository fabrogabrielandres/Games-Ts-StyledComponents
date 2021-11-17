import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  backgroundColor,
  primaryColor,
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
`;

export const Details = styled.div`
  padding: 20px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${secondaryTextColor};
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
  width: 20%;
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

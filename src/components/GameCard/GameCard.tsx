import React, { ReactElement } from 'react';
import { Game } from '../../types/types';
import { Img, StyledLink, Title, Details, Description, Genre, Icon,Footer } from './styles';
import { BROWSER, WINDOWS } from './constants';
import windowsIcon from '../../../assets/icons/windows.svg';
import browserIcon from '../../../assets/icons/browser.svg';
interface Props {
  content: Game;
}

export const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  console.log(platform);

  const icons = platform.split(',').map((p, idx) => {
    let icon = null;
    switch (p.trim()) {
      case BROWSER:
        icon = <Icon key={idx} alt="" src={browserIcon} />;
        break;
      case WINDOWS:
        icon = <Icon key={idx} alt="" src={windowsIcon} />;
        break;
      default:
        break;
    }
    return icon;
  });

  const link = `/game/${id}`;
  return (
    <StyledLink to={link}>
      <Img src={thumbnail} alt={`${title} logo`} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Footer>
          {icons}
          <Genre>{genre}</Genre>
        </Footer>
      </Details>
    </StyledLink>
  );
};

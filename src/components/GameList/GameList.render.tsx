import React, { ChangeEvent, ReactElement } from 'react';

import { Game } from '../../types/types';
import { GameCard } from '../GameCard/GameCard';
import { GameFilter } from '../GameFilter';

import { List, ListItem } from './styles';

interface Props {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const GameListRender = ({ err, games,onFilterChange }: Props): ReactElement => {
  if (err) {
    return <p>Unable to fetch games</p>;
  }
  if (!games?.length) {
    return <p>No games available</p>;
  }
  return (
    <>
      <GameFilter onChange={onFilterChange}/>
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

import React, { ReactElement } from 'react';

import { Game } from '../../types/types';
import { GameCard } from '../GameCard/GameCard';

interface Props {
  err?: string;
  games: Game[];
}

export const GameListRender = ({ err, games }: Props): ReactElement => {
  if (err) {
    return <p>Unable to fetch games</p>;
  }
  if (games?.length) {
    return <p>No games available</p>;
  }
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          <GameCard content={game} />
        </li>
      ))}
    </ul>
  );
};

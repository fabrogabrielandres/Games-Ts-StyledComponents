import axios from 'axios';
import React from 'react';
import { ReactElement, useEffect, useState } from 'react';

import { Game } from '../../types/types';
import { API_HOST, API_KEY } from './constants';
import { GameListRender } from './GameList.render';

export const GameList = (): ReactElement => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');

  const fetching = async () => {
    try {
      const res = await axios.get('/games', {
        baseURL: `https://${API_HOST}/api`,
        params: { platform: 'browser' },
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      });
      setGames(res.data);
    } catch (error) {
      setErr(error.message);
    }
  };

  useEffect(() => {
    fetching();
  }, []);
  return <GameListRender err={err} games={games} />;
};

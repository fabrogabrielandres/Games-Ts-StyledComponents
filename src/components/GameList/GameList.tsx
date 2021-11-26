import axios from 'axios';
import React, { ChangeEvent, useCallback } from 'react';
import { ReactElement, useEffect, useState } from 'react';

import { Game } from '../../types/types';
import { API_HOST, API_KEY } from './constants';
import { GameListRender } from './GameList.render';
import { Filter } from './types';

export const GameList = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({platform:"browser", sortBy:"relevance"})
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

  const onFilterChange = useCallback((e:ChangeEvent<HTMLFormElement>)=>{ 
      setFilter(current =>({
        ...current, 
        [e.target.name]:e.target.value
      }))
      e.preventDefault()
  }, [])
  return <GameListRender err={err} games={games} onFilterChange={onFilterChange}/>;
};

import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Game } from '../../../types/types';
import { API_HOST, API_KEY } from './constants';
import { Filter } from '../../GameList/types';

type Response = {
  games: Game[];
  error?: string;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');
  const { platform, genre, tag, sortBy } = params;
  const fetching = async () => {
    try {
      const res = await axios.get('/games', {
        baseURL: `https://${API_HOST}/api`,
        params: { platform, category: genre, tag, 'sort-by': sortBy },
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      });
      setGames(res.data);
    } catch (e) {
      setErr(e.message);
    }
  };

  useEffect(() => {
    fetching();
  }, [platform, genre, tag, sortBy]);

  return { games, error: err };
};

export default useFetch;

import React, { ChangeEvent, useCallback, ReactElement, useState, useEffect } from 'react';
import useFetch from '../Hooks/UseFetch/useFetch';
import { GameListRender } from './GameList.render';
import { Filter } from './types';

export const GameList = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    platform: 'browser',
    sortBy: 'relevance',
  });

  const { games, error } = useFetch(filter);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);
  return <GameListRender err={error} games={games} onFilterChange={onFilterChange} />;
};

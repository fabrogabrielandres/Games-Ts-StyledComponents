import React, { ChangeEvent, ReactElement } from 'react';
import { GENRES, PLATFORMS, SORT_BY, TAGS } from './constants';

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const GameFilter = ({ onChange }: Props): ReactElement => {
  return (
    <form onChange={onChange}>
      <label htmlFor="platform-select">
        Platform:
        <select name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="genre-select">
        GENRES:
        <select name="genre" id="genre-select">
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.display}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="tag-select">
        TAGS:
        <select name="tag" id="tag-select">
          {TAGS.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.display}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="sortby-select">
        SORT_BY:
        <select name="sortby" id="sortby-select">
          {SORT_BY.map((sortby) => (
            <option key={sortby.value} value={sortby.value}>
              {sortby.display}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

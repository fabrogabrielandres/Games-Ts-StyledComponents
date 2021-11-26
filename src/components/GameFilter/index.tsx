import React, { ChangeEvent, ReactElement } from 'react';
import { GENRES, PLATFORMS, SORT_BY, TAGS } from './constants';
import { Form, Label, Select } from './styles';

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const GameFilter = ({ onChange }: Props): ReactElement => {
  return (
    <Form onChange={onChange}>
      <Label htmlFor="platform-select">
        Platform:
        <Select name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="genre-select">
        GENRES:
        <Select name="genre" id="genre-select">
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.display}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="tag-select">
        TAGS:
        <Select name="tag" id="tag-select">
          {TAGS.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.display}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="sortby-select">
        SORT_BY:
        <Select name="sortby" id="sortby-select">
          {SORT_BY.map((sortby) => (
            <option key={sortby.value} value={sortby.value}>
              {sortby.display}
            </option>
          ))}
        </Select>
      </Label>
    </Form>
  );
};

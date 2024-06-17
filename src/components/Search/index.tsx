'use client';
import Image from 'next/image';
import styles from './index.module.css';
import magnifyingGlass from './magnifying-glass.svg';
import { useContext, useRef } from 'react';
import CharactersContext from '@/state/characters/Context';
import { getCharacters } from '@/api';
import FavoritesContext from '@/state/favorites/Context';

export default function Search({ favoritesOnly }) {
  const requestRef = useRef(Promise.resolve());
  const { characters, setCharacters } = useContext(CharactersContext);
  const { favorites } = useContext(FavoritesContext);
  const characterIds = Object.keys(characters);
  const numResults = favoritesOnly
    ? characterIds.filter((id) => id in favorites).length
    : characterIds.length;
  return (
    <div className={styles.searchWithResults}>
      <div className={styles.search}>
        <Image src={magnifyingGlass} alt='Magnifying glass' priority />
        <input
          type='search'
          className={styles.inputSearch}
          placeholder='Search a character...'
          onChange={(event) => {
            const promise = getCharacters(event.target.value);
            requestRef.current = requestRef.current.then(() =>
              promise.then(setCharacters)
            );
          }}
        />
      </div>
      <span className={styles.results}>
        {numResults} RESULT{numResults != 1 && 'S'}
      </span>
    </div>
  );
}

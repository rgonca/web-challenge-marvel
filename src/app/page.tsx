import React from 'react'
import Results from '@/components/Results'
import Search from '@/components/Search'
import styles from './page.module.css'
import CharactersProvider from '@/state/characters/Provider';
import { getCharacters } from '@/api';
import getServerSideQueryParams from '@/utils/getServerSideQueryParams';

export default async function Page() {

  const characters = await getCharacters(undefined, getServerSideQueryParams());
  return (
    <CharactersProvider
      initialState={characters}
    >
      <main className={styles.main}>
        <Search favoritesOnly={false}/>
        <Results favoritesOnly={false}/>
      </main>
    </CharactersProvider>
  );
}

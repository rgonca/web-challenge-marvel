import Results from '@/components/Results'
import Search from '@/components/Search'
import styles from '../page.module.css'
import CharactersProvider from '@/state/characters/Provider'
import { getCharacters } from '@/api'
import getServerSideQueryParams from '@/utils/getServerSideQueryParams'
import { type Character } from '@/interfaces/character'

export default async function Page () {
  const characters = await getCharacters(undefined, getServerSideQueryParams())
  return (
    <CharactersProvider
      initialState={characters as Character[]}
    >
      <main className={styles.main}>
        <h1 className={styles.title}>FAVORITES</h1>
        <Search favoritesOnly />
        <Results favoritesOnly />
      </main>
    </CharactersProvider>
  )
}

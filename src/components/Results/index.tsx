'use client'
import { useContext } from 'react'
import Card from '../Card'
import styles from './index.module.css'
import Link from 'next/link'
import CharactersContext from '@/state/characters/Context'
import FavoritesContext from '@/state/favorites/Context'
import { type CharacterDetails } from '@/interfaces/character'
export default function Results ({ favoritesOnly }: { favoritesOnly: boolean }) {
  const { characters } = useContext(CharactersContext)
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext)
  return (
    <div className={styles.results}>
      {Object.entries(characters).map(
        ([id, { imagePath, imageExtension, name, description }]: [string, CharacterDetails]) => {
          const isFavorite = id in favorites
          return (
            (!favoritesOnly || isFavorite) && (
              <Link key={id} href={id}>
                <Card
                  image={`${imagePath}/standard_xlarge.${imageExtension}`}
                  name={name as unknown as string}
                  fullHeart={isFavorite}
                  onClickHeart={(event) => {
                    event.preventDefault()
                    isFavorite
                      ? removeFavorite(id)
                      : addFavorite(id, {
                        name,
                        description,
                        imagePath,
                        imageExtension
                      })
                  }}
                />
              </Link>
            )
          )
        }
      )}
    </div>
  )
}

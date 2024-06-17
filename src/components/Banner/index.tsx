'use client';
import { useContext } from 'react';
import Heart from '../Heart';
import styles from './index.module.css';
import FavoritesContext from '@/state/favorites/Context';
import { useParams } from 'next/navigation';
import { EMPTY, FULL } from '../Heart/constants';
import ExternalImage from '../ExternalImage';

export interface BannerProps {
  image: string;
  name: string;
  description: string;
  imagePath: string;
  imageExtension: string;
}


export default function Banner({ image, name, description, imagePath, imageExtension }: BannerProps) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const { id } = useParams<{ id: any }>();
  const isFavorite = id in favorites;
  return (
    <div className={styles.banner}>
      <ExternalImage src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{name}</h1>
          <Heart
            testId='heart-button'
            className={styles.heart}
            type={isFavorite ? FULL : EMPTY}
            onClick={() => {
              isFavorite
                ? removeFavorite(id)
                : addFavorite(id, {
                  name,
                  description,
                  imagePath,
                  imageExtension,
                });
            }}
          />
        </div>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
}

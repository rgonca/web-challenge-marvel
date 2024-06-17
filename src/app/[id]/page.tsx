import styles from './page.module.css';
import ComicCarousel from '@/components/ComicCarousel';
import { ComicProps } from '@/components/Comic';
import { getCharacter, getCharacterComics } from '@/api';
import getServerSideQueryParams from '@/utils/getServerSideQueryParams';
import Banner from '@/components/Banner';

export default async function Page({ params: { id } }: { params: { id: any } }) {
  const { name, description, imagePath, imageExtension } = (
    await getCharacter(id, getServerSideQueryParams())
  )[id];
  const comics: ComicProps[] = await getCharacterComics(id, getServerSideQueryParams()) as ComicProps[];
  return (
    <main className={styles.main}>
      <Banner
        image={`${imagePath}/portrait_uncanny.${imageExtension}`}
        name={name}
        description={description}
        imagePath={imagePath}
        imageExtension={imageExtension}
      />
      <h2 className={styles.subtitle}>COMICS</h2>
      <ComicCarousel comics={comics} className={styles.carousel} />
    </main>
  );
}

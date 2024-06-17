import Comic, { type ComicProps } from '../Comic'
import styles from './index.module.css'
interface ComicCarouselProps {
  comics: ComicProps[]
  className: string
}

export default function ComicCarousel ({ comics, className }: ComicCarouselProps) {
  return (
    <div className={[styles.carousel, className].join(' ')}>
      {Object.entries(comics).map(([k, { title, year, image }]) => (
        <Comic key={k} title={title} year={year} image={image} />
      ))}
    </div>
  )
}

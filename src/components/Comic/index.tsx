import ExternalImage from '../ExternalImage'
import styles from './index.module.css'

export interface ComicProps {
  title: string
  year: number
  image: string
}

export default function Comic ({ title, year, image }: ComicProps) {
  return (
    <div className={styles.comic}>
      <ExternalImage src={image} alt={title} className={styles.image} />
      <span className={styles.title}>{title}</span>
      {!isNaN(year) && <span className={styles.year}>{year}</span>}
    </div>
  )
}

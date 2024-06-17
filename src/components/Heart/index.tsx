import Image from 'next/image'
import { FULL } from './constants'
import styles from './index.module.css'

interface HeartProps {
  type?: typeof FULL // Assuming FULL is an object with a src property
  className?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  testId?: string
}

export default function Heart ({ type = FULL, className, onClick, testId }: HeartProps) {
  return (
    <Image
      data-testid={testId}
      src={type}
      alt='Heart icon'
      priority
      className={[styles.image, className].join(' ')}
      onClick={onClick}
      onMouseEnter={(event) => ((event.target as HTMLImageElement).src = FULL.src)}
      onMouseLeave={(event) => ((event.target as HTMLImageElement).src = type.src)}
    />
  )
}

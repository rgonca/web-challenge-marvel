import Image from 'next/image';
import { FULL } from './constants';
import styles from './index.module.css';

interface HeartProps {
  type?: typeof FULL; // Assuming FULL is an object with a src property
  className: string;
  onClick: () => void; // Assuming onClick is a function
  testId: string;
}

export default function Heart({ type = FULL, className, onClick, testId }: HeartProps) {
  return (
    <Image
      data-testid={testId}
      src={type}
      alt='Heart icon'
      priority
      className={[styles.image, className].join(' ')}
      onClick={onClick}
      onMouseEnter={(event) => (event.target.src = FULL.src)}
      onMouseLeave={(event) => (event.target.src = type.src)}
    />
  );
}

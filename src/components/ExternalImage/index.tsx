import Image from 'next/image';
import styles from './index.module.css';

interface ExternalImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ExternalImage({ src, alt, className = '' }: ExternalImageProps) {
  return (
    <div className={[styles.image, className].join(' ')}>
      <Image src={src} alt={alt} sizes='auto' fill />
    </div>
  );
}

import Image from 'next/image'

interface HeartProps {
  empty: boolean
  className: string
}

export default ({ empty, className }: HeartProps) => (
  <Image
    src={empty ? './empty-heart.svg' : './full-heart.svg'}
    alt='Heart icon'
    className={className}
    width={24}
    height={21.68}
    priority
  />
)

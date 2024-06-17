import '@/app/global.css';
import styles from './layout.module.css';

import { Roboto_Condensed } from 'next/font/google';
import Logo from '@/components/Logo';
import Link from 'next/link';
import FavoritesProvider from '@/state/favorites/Provider';
import HeartCounter from '@/components/HeartCounter';

export const metadata = {
  title: "Zara Web Challenge",
  description: "Prueba técnica de Zara - Roberto Gonzalez"
};

// If loading a variable font, you don't need to specify the font weight
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={[robotoCondensed.className, styles.html].join(' ')}
    >
      <body className={styles.body}>
        <FavoritesProvider initialState={[]}>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <Link href='/'>
                <Logo />
              </Link>
              <Link href='/favorites'>
                <HeartCounter />
              </Link>
            </nav>
          </header>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}

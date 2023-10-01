import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            Home
          </Link>
        </p>
        <p className={styles.headerTitle}>
          <Link href="/simulate">
            Simulate
          </Link>
        </p>
        <p className={styles.headerTitle}>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <a href="https://github.com/59CRAWL" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;

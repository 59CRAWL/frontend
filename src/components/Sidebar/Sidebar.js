import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Container from '@components/Container';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <menu className={styles.sidebar}>
      <Container className={styles.sidebarContainer}>
        <Link href ="/">
          <img src='assets/psa.png' className={styles.sidebarLogo}/>
        </Link>
        <div>

          <Link href="/" className={styles.sidebarTitle}>
            <img src= 'assets/home.png' className={styles.iconsize}/>
              Home
          </Link>

          <Link href="/simulate" className={styles.sidebarTitle}>
            <img src= 'assets/simulation.png' className={styles.iconsize}/>
              Simulate
          </Link>

          <Link href="/dashboard" className={styles.sidebarTitle}>
            <img src= 'assets/dashboard.png' className={styles.iconsize}/>
              Dashboard
          </Link>

          <Link href="/chatbot" className={styles.sidebarTitle}>
            <img src= 'assets/chatbot.png' className={styles.iconsize}/>
              Chatbot
          </Link>

        </div>

      </Container>
    </menu>
  );
};

export default Sidebar;

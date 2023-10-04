import Head from 'next/head';

import Header from '@components/Header';
import Footer from '@components/Footer';
// import Chatbot from '@components/Chatbot';

import styles from './Layout.module.scss';
import Sidebar from '@components/Sidebar/Sidebar';

const Layout = ({ children, className, ...rest }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main className={styles.main}>{children}</main>
      {/* <Chatbot /> */}
      <Footer />
    </div>
  );
};

export default Layout;

import Head from 'next/head';
import Layout from '@components/Layout';
import Ingestor from '@components/Ingestor';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>059CRAWL</title>
        <meta name="description" content="PSA Codesprint 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Ingestor />
      
    </Layout>
  )
}

import Charts from "@components/Charts"
import Layout from "@components/Layout"
import Head from "next/head"
import { useContext } from "react"
import { ShipContext } from "src/context/shipContext"

export default function Dashboard() {
    const { message } = useContext(ShipContext)
    return (
      <Layout>
        <Head>
          <title>059CRAWL</title>
          <meta name="description" content="PSA Codesprint 2023" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Charts />
      </Layout>
    )
  }
  
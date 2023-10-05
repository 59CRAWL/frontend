import React, { useState } from 'react';
import axios from 'axios';

import Head from 'next/head';
import Layout from '@components/Layout';

import { useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';

import ChatbotLayout from '@components/Chatbot/Chatbot';

function Chatbot() {
    
    return (

        <Layout>

            <Head>
                <title>059CRAWL</title>
                <meta name="description" content="PSA Codesprint 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </Layout>

    )
}
export default Chatbot;
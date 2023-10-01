import React, { useState } from 'react';
import axios from 'axios';

import Head from 'next/head';
import Layout from '@components/Layout';

import { useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';

function Chatbot() {
    const [prompt, setPrompt] = useState('');
    const [botReply, setBotReply] = useState('');

    const { message } = useContext(ShipContext);

    let json;

    if (message) {
        json = JSON.stringify(message.slice(0,20))
    }

    const handleChat = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/chat', {
                json: json,
                prompt: prompt
            });

            setBotReply(response.data);
        } catch (error) {
            setBotReply("Chat API is not working, please configure your replicate API key")
        }
    };

    return (

        <Layout>
            <Head>
                <title>059CRAWL</title>
                <meta name="description" content="PSA Codesprint 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1>Welcome to PSA's Chat Bot! Ask any questions regarding the data!</h1>
                <div>
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <button onClick={handleChat}>Send</button>
                </div>

                <p>{botReply ? botReply : "Hi, please ask me any question regarding the dataset!"}</p>
            </div>
        </Layout>
    );
}

export default Chatbot;
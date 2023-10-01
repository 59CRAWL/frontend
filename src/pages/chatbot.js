import React, { useState } from 'react';
import axios from 'axios';

import Head from 'next/head';
import Layout from '@components/Layout';

import { useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';
import Layout from '@components/Layout';
import Head from 'next/head';

function Chatbot() {
    const [prompt, setPrompt] = useState('');
    const [botReply, setBotReply] = useState('');

    const { message } = useContext(ShipContext);

    // var data = message.slice(0, 10)

    // console.log(data)

    const handleChat = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/chat', {
                json: JSON.stringify(message),
                prompt: prompt
            });

            setBotReply(response);

            console.log(botReply)
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

            <Layout>
      <Head>
        <title>059CRAWL</title>
        <meta name="description" content="PSA Codesprint 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='center rcenter'>
                <h1 className='cheader'>Welcome to PSA's Chat Bot! Ask any questions regarding the data!</h1>
                <div>
                    <input
                      className='rounded chatinput'
          type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <button type='submit' className='ttext' onClick={handleChat}>Send</button>
                </div>

                {/* <p>{botReply}</p> */}
              </div>


        </Layout>
      </Layout>
  )
  }
export default Chatbot;
import React, { useState } from 'react';
import axios from 'axios';

import { useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';
import Layout from '@components/Layout';
import Head from 'next/head';

function Chatbot() {
  const [prompt, setPrompt] = useState('');
  const [botReply, setBotReply] = useState('');

  const { message } =   useContext(ShipContext);

  const handleChat = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', {
        json: message,
        prompt: prompt
      });

      setBotReply(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <Head>
        <title>059CRAWL</title>
        <meta name="description" content="PSA Codesprint 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='center rcenter'>
      <h1 className='cheader'>Chat Bot</h1>
      <div>
        <input
        className='rounded chatinput'
          type="text"
          value={message}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type='submit' className='ttext' onClick={handleChat}>Send</button>
      </div>
      <p>{botReply}</p>
      </div>
    </Layout>
  )
  }
export default Chatbot;
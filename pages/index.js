import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chainlink Live NFT</title>
        <meta name="description" content="Chainlink Live NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-hero-pattern bg-cover min-h-screen blur-sm'></div>
      <div className='absolute top-[25%] left-[25%]'>
        <h1 className="text-8xl font-extrabold font-One text-center items-center text-black">
          <span className='opacity-90'>Chainlink</span> <span className='bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-transparent bg-clip-text text-9xl block mt-[-10px]'>Live NFT</span>
        </h1>
        <div className='text-center mt-24'>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-lg text-2xl px-9 py-5 text-center mr-2 mb-2">Connect Wallet</button>
        </div>
      </div>
    </>
  )
}

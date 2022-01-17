import { NextPage } from 'next'
import Head from 'next/head'
import { Matrix } from '../components/grid'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>qr cross word</title>
        <meta name='description' content='Generate QRCode by solving cross-word' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Matrix grid={21} sideLength={420} />
      <br></br>
      <button>Goal</button>
    </div>
  )
}

export default Home

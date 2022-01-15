import { NextPage } from "next";
import Head from "next/head";
import { Matrix } from "../components/grid";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>qr cross word</title>
        <meta
          name="description"
          content="Generate QRCode by solving cross-word"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{width: '400px', height: '400px', padding: '20px'}}>
        <Matrix />
      </div>
    </div>
  );
}

export default Home
import Head from 'next/head';
import Header from './header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Natours | Exciting tours for adventurous</title>
        <link rel="icon" href="/static/images/favicon.png" />
      </Head>
      <Header />
    </>     
  )
}

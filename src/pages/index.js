import Head from 'next/head';
import GlobalStyle from '../../styles/globalStyles'; 
import Header from './header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />     
    </>
  )
}

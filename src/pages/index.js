import Head from 'next/head';
import GlobalStyle from '../../styles/globalStyles'; 
import Header from './header';
import { ThemeProvider } from 'styled-components';


export default function Home() {
  return (
    <ThemeProvider theme={colors}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />     
    </ThemeProvider>
  )
}

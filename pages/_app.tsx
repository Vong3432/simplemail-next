// fonts
import "@fontsource/montserrat/900.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/navbar/Navbar'
import theme from '../theme'
import Head from "next/head"
import { DemoContextProvider } from "../context/DemoContext"


function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme} >
    <Head>
      <title>Simplemail</title>
      <meta name="description" content="Small service that let you send Gmail with API request." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <DemoContextProvider>
      <Component {...pageProps} />
    </DemoContextProvider>
  </ChakraProvider>
}

export default MyApp

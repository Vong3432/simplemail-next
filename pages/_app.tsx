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


function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme} >
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp

import '../styles/globals.css'
import Navbar from '../components/Navbar/navbar'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';
import Footer from '../components/Footer/footer';
import { SessionProvider } from "next-auth/react"
import LocalStateContextProvider from '../contexts/LocalStateContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  const [mode, setMode] = useState('light');




  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <LocalStateContextProvider>
          <Navbar mode={mode} setMode={setMode} />
          <Component {...pageProps} />
          <Footer />
        </LocalStateContextProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp

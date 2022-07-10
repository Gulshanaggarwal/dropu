import '../styles/globals.css'
import Navbar from '../components/Navbar/navbar'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';
import Footer from '../components/Footer/footer';

function MyApp({ Component, pageProps }) {

  const [mode, setMode] = useState('light');




  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <Navbar mode={mode} setMode={setMode} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp

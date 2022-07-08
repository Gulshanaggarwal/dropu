import '../styles/globals.css'
import Navbar from '../components/Navbar/navbar'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer/footer';

function MyApp({ Component, pageProps }) {

  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#ff3d00',
        light: '#ff7539',
        dark: '#c30000'
      },
    }
  })



  return (
    <ThemeProvider theme={theme}>
      <Navbar mode={mode} setMode={setMode} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp

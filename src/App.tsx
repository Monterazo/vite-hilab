import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';
import { About, Blog, Navbar, Contact} from './components';
import { Button } from './components/navbar/styles';


function App() {

  return (
    
    <ThemeProvider theme={theme}>
      
      <About/>
      <Button>AAAAAAAAAAAAAAAAAAAAAA</Button>
      <Navbar/>
      <Blog/>
      <Contact/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App

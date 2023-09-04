import { useState } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components';
//import { theme } from './styles/theme';
//import { GlobalStyle } from './styles/global';
import {  Blog, Navbar} from './components';


function App() {

  return (
    <>
      <Navbar/>
      <Blog/>
    </>
  )
}

export default App

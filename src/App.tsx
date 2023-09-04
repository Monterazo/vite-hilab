import { useState } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components';
//import { theme } from './styles/theme';
//import { GlobalStyle } from './styles/global';
import {  Blog, Card } from './components';


function App() {

  return (
    <>
        <Blog/>
        <Card name="Aloha" description="Aloha" link="https://www.google.com.br"

          />
    </>
  )
}

export default App

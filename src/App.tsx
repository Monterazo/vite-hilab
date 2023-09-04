import { useState } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components';
//import { theme } from './styles/theme';
//import { GlobalStyle } from './styles/global';
import {  Blog, Post } from './components';


function App() {

  return (
    <>
        <Blog/>
        <Post name="Aloha" description="Aloha" link="https://www.google.com.br"

          />
    </>
  )
}

export default App

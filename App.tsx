
import React from 'react';
import { StatusBar } from 'react-native';

import { Main } from './src/pages/Main'

import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';


export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8b10ae'/>
      <ThemeProvider theme={theme}>
        <Main title="Codiguinnnn" />
      </ThemeProvider>
    </>
  )}

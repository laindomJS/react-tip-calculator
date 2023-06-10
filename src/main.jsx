import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme.js'
import { CalculatorProvider } from './context/CalculatorContext.jsx'

import '@fontsource/space-mono/700.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CalculatorProvider>
        <App />
      </CalculatorProvider>
    </ChakraProvider>
  </React.StrictMode>
)

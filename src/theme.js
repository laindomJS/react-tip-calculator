/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      'strong-cyan': 'hsl(172, 67%, 45%)'
    },
    neutral: {
      'very-dark-cyan': 'hsl(183, 100%, 15%)',
      'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
      'grayish-cyan': 'hsl(184, 14%, 56%)',
      'light-grayish-cyan': 'hsl(185, 41%, 84%)',
      'very-light-grayish-cyan': 'hsl(189, 41%, 97%)'
    }
  },
  fonts: {
    heading: `'Space Mono', sans-serif`,
    body: `'Space Mono', sans-serif`
  }
})

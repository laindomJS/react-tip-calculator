import { Box } from '@chakra-ui/react'
import { CalculatorInput } from './CalculatorInput'

export const CalculatorContainer = () => {
  return (
    <Box
      as='article'
      w={{ base: '100%' }}
      bgColor='white'
      display='flex'
      flexDirection={{ base: 'column', md: 'row' }}
      borderRadius='10px'
      p='1rem'
      mt='2rem'
    >
      <CalculatorInput />
    </Box>
  )
}

import { Box, Input, FormControl, FormLabel, Button, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react'
import { InputBill } from './InputBill'

export const CalculatorInput = () => {
  return (
    <Box as='section'>
      <InputBill />
      <FormControl mt='1rem'>
        <FormLabel color='neutral.dark-grayish-cyan'>
          Number of People
        </FormLabel>
        <Input
          type='text'
          placeholder='0'
          variant='filled'
          bgColor='neutral.very-light-grayish-cyan'
          color='neutral.dark-grayish-cyan'
          textAlign='right'
          _placeholder={{ color: 'neutral.dark-grayish-cyan', textAlign: 'right' }}
        />
      </FormControl>
    </Box>
  )
}

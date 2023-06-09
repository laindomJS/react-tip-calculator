import { Box } from '@chakra-ui/react'
import { InputButtons } from './InputButtons'
import { InputBill } from './InputBill'
import { InputPeople } from './InputPeople'

export const CalculatorInput = () => {
  return (
    <Box as='section'>
      <InputBill />
      <InputButtons />
      <InputPeople />
    </Box>
  )
}

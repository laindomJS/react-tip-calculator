import { Box } from '@chakra-ui/react'
import { InputPercentage } from './inputs/InputPercentage'
import { InputBill } from './inputs/InputBill'
import { InputPeople } from './inputs/InputPeople'

export const CalculatorInput = () => {
  return (
    <Box as='section'>
      <InputBill />
      <InputPercentage />
      <InputPeople />
    </Box>
  )
}

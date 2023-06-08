import { FormControl, FormLabel, InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react'
import { FaDollarSign } from 'react-icons/fa'

export const InputBill = () => {
  return (
    <FormControl>
      <FormLabel color='neutral.dark-grayish-cyan'>
        Bill
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Icon
            boxSize={4}
            as={FaDollarSign}
            color='neutral.dark-grayish-cyan'
          />
        </InputLeftElement>
        <Input
          type='text'
          placeholder='0'
          variant='filled'
          bgColor='neutral.very-light-grayish-cyan'
          color='neutral.dark-grayish-cyan'
          textAlign='right'
          _placeholder={{ color: 'neutral.dark-grayish-cyan', textAlign: 'right' }}
        />
      </InputGroup>
    </FormControl>
  )
}

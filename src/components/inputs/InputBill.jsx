import { FormControl, FormLabel, InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react'
import { FaDollarSign } from 'react-icons/fa'
import { useCalculator } from '../../hooks/useCalculator'

export const InputBill = () => {
  const { bill, handleInput } = useCalculator()

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
          onChange={handleInput}
          value={bill === 0 ? '' : bill}
          type='number'
          placeholder='0'
          variant='filled'
          bgColor='neutral.very-light-grayish-cyan'
          color='neutral.dark-grayish-cyan'
          textAlign='right'
          autoComplete='off'
          name='bill'
          _placeholder={{ color: 'neutral.dark-grayish-cyan', textAlign: 'right' }}
        />
      </InputGroup>
    </FormControl>
  )
}

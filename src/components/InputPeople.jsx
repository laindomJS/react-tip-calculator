import { FormControl, FormLabel, Input, Icon, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsPersonFill } from 'react-icons/bs'

export const InputPeople = () => {
  return (
    <FormControl mt='1rem'>
      <FormLabel color='neutral.dark-grayish-cyan'>
        Number of People
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Icon as={BsPersonFill} boxSize={4} fill='neutral.dark-grayish-cyan' />
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

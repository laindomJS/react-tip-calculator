import { FormControl, FormLabel, Input, Icon, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsPersonFill } from 'react-icons/bs'
import { useCalculator } from '../../hooks/useCalculator'

export const InputPeople = () => {
  const { setNumPeople, numPeople } = useCalculator()

  const handleNumPeople = (e) => {
    const value = parseInt(e.target.value)
    setNumPeople(isNaN(value) ? 0 : value)
  }

  return (
    <FormControl mt='2rem'>
      <FormLabel color='neutral.dark-grayish-cyan'>
        Number of People
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Icon as={BsPersonFill} boxSize={4} fill='neutral.dark-grayish-cyan' />
        </InputLeftElement>
        <Input
          onChange={handleNumPeople}
          value={numPeople === 0 ? '' : numPeople}
          type='number'
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

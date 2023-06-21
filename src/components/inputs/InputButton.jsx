import { Button } from '@chakra-ui/react'
import { useCalculator } from '../../hooks/useCalculator'

export const InputButton = ({ value, text }) => {
  const { handleInput } = useCalculator()

  return (
    <Button
      onClick={handleInput}
      value={value}
      bgColor='neutral.very-dark-cyan'
      color='white'
      w='100%'
      h='45'
      name='percentage'
      transition='.2s ease-in'
      fontSize='20px'
      _hover={{ bgColor: 'neutral.light-grayish-cyan' }}
      _focus={{ bgColor: 'primary.strong-cyan', color: 'neutral.very-dark-cyan' }}
    >
      {text}
    </Button>
  )
}

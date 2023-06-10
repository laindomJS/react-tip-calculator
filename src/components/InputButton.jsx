import { Button } from '@chakra-ui/react'
import { useCalculator } from '../hooks/useCalculator'

export const InputButton = ({ value, text }) => {
  const { setPercentage } = useCalculator()

  const handleButtonCustom = (e) => {
    setPercentage(parseFloat(e.target.value))
  }

  return (
    <Button
      onClick={handleButtonCustom}
      value={value}
      bgColor='neutral.very-dark-cyan'
      w='100%'
      h='45'
      transition='.2s ease-in'
      fontSize='20px'
      _hover={{ bgColor: 'neutral.light-grayish-cyan' }}
      _focus={{ bgColor: 'primary.strong-cyan', color: 'neutral.very-dark-cyan' }}
    >
      {text}
    </Button>
  )
}

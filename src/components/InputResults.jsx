import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useCalculator } from '../hooks/useCalculator'

export const InputResults = () => {
  const { setReset, bill, percentage, numPeople } = useCalculator()

  const tipAmount = (bill * percentage) / 100
  const tipAmountPerPerson = numPeople !== 0 ? (bill * percentage) / (100 * numPeople) : 0
  const totalPerPerson = numPeople !== 0 ? (bill + tipAmount) / numPeople : 0

  return (
    <Box
      w='100%'
      as='section'
      bgColor='neutral.very-dark-cyan'
      borderRadius='12px'
      mt={{ base: '2rem', md: '0' }}
      ml={{ base: '0', md: '1rem' }}
      p='1.5rem'
    >

      <Flex
        w='100%'
        alignItems='center'
        justifyContent='space-between'
      >
        <Box>
          <Text color='white' fontSize='15px'>Tip Amount</Text>
          <Text fontSize='14px' color='neutral.light-grayish-cyan'>/ person</Text>
        </Box>
        <Box>
          <Text
            fontSize='30px' color='primary.strong-cyan'
          >
            $ {tipAmountPerPerson.toFixed(2)}
          </Text>
        </Box>
      </Flex>

      <Flex
        w='100%'
        alignItems='center'
        justifyContent='space-between'
        mt='2rem'
      >
        <Box>
          <Text color='white' fontSize='15px'>Total</Text>
          <Text fontSize='14px' color='neutral.light-grayish-cyan'>/ person</Text>
        </Box>
        <Box>
          <Text
            fontSize='30px' color='primary.strong-cyan'
          >
            $ {totalPerPerson.toFixed(2)}
          </Text>
        </Box>
      </Flex>

      <Button
        onClick={setReset}
        bgColor='primary.strong-cyan' textTransform='uppercase'
        w='100%'
        mt={{ base: '2rem', md: '35%' }}
        textAlign='center'
        color='neutral.very-dark-cyan'
        transition='.2s ease-in'
        _hover={{ bgColor: 'neutral.light-grayish-cyan' }}
      >
        Reset
      </Button>
    </Box>
  )
}

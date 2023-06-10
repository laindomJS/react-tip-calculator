import { Grid, GridItem, Button, Input } from '@chakra-ui/react'
import { useCalculator } from '../hooks/useCalculator'

export const InputButtons = () => {
  const { setPercentage } = useCalculator()

  const handleButtonCustom = (e) => {
    setPercentage(parseFloat(e.target.value))
  }

  return (
    <Grid
      mt='2rem'
      w='100%'
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      templateRows='repeat(2, 1fr)'
      gap='10px'
    >
      <GridItem>
        <Button
          onClick={handleButtonCustom}
          value='5'
          bgColor='neutral.very-dark-cyan'
          w='100%'
          h='45'
          transition='.2s ease-in'
          _hover={{ bgColor: 'neutral.light-grayish-cyan' }}
        >
          5%
        </Button>
      </GridItem>
      <GridItem>
        <Button
          onClick={handleButtonCustom}
          w='100%'
          h='45'
          value='10'
          bgColor='neutral.very-dark-cyan'
          transition='.2s ease-in'
          _hover={{ bgColor: 'neutral.light-grayish-cyan' }}
        >
          10%
        </Button>
      </GridItem>
      <GridItem>
        <Button
          onClick={handleButtonCustom}
          w='100%'
          h='45'
          value='15'
          bgColor='neutral.very-dark-cyan'
          transition='.2s ease-in'
          _hover={{ bgColor: 'neutral.light-grayish-cyan' }}
        >
          15%
        </Button>
      </GridItem>
      <GridItem>
        <Button
          onClick={handleButtonCustom}
          w='100%'
          h='45'
          value='25'
          bgColor='neutral.very-dark-cyan'
          transition='.2s ease-in'
          _hover={{ bgColor: 'neutral.light-grayish-cyan' }}
        >
          25%
        </Button>
      </GridItem>
      <GridItem>
        <Button
          onClick={handleButtonCustom}
          w='100%'
          h='45'
          value='50'
          bgColor='neutral.very-dark-cyan'
          transition='.2s ease-in'
          _hover={{ bgColor: 'neutral.light-grayish-cyan' }}
        >
          50%
        </Button>
      </GridItem>
      <GridItem>
        <Input
          onChange={handleButtonCustom}
          color='neutral.dark-grayish-cyan'
          h='45px'
          placeholder='Custom'
          bgColor='neutral.very-light-grayish-cyan'
          autoComplete='off'
          _placeholder={{ color: 'neutral.dark-grayish-cyan' }}
        />
      </GridItem>
    </Grid>
  )
}

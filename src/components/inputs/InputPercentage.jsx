import { Grid, GridItem, Input } from '@chakra-ui/react'
import { useCalculator } from '../../hooks/useCalculator'
import { InputButton } from './InputButton'

export const InputPercentage = () => {
  const { handleInput } = useCalculator()

  return (
    <Grid
      mt='2rem'
      w='100%'
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      templateRows='repeat(2, 1fr)'
      gap='10px'
    >
      <GridItem>
        <InputButton value={5} text='5%' />
      </GridItem>
      <GridItem>
        <InputButton value={10} text='10%' />
      </GridItem>
      <GridItem>
        <InputButton value={15} text='15%' />
      </GridItem>
      <GridItem>
        <InputButton value={25} text='25%' />
      </GridItem>
      <GridItem>
        <InputButton value={50} text='50%' />
      </GridItem>
      <GridItem>
        <Input
          onChange={handleInput}
          color='neutral.dark-grayish-cyan'
          h='45px'
          placeholder='Custom'
          bgColor='neutral.very-light-grayish-cyan'
          autoComplete='off'
          name='percentage'
          _placeholder={{ color: 'neutral.dark-grayish-cyan' }}
        />
      </GridItem>
    </Grid>
  )
}

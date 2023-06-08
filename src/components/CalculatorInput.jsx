import { Box, Grid, GridItem, Button, Input } from '@chakra-ui/react'
import { InputBill } from './InputBill'
import { InputPeople } from './InputPeople'

export const CalculatorInput = () => {
  return (
    <Box as='section'>
      <InputBill />
      <Grid
        mt='1rem'
        w='100%'
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        templateRows='repeat(2, 1fr)'
        gap='10px'
      >
        <GridItem>
          <Button w='100%' h='45' value='5' bgColor='neutral.very-dark-cyan'>5%</Button>
        </GridItem>
        <GridItem>
          <Button w='100%' h='45' value='10' bgColor='neutral.very-dark-cyan'>10%</Button>
        </GridItem>
        <GridItem>
          <Button w='100%' h='45' value='15' bgColor='neutral.very-dark-cyan'>15%</Button>
        </GridItem>
        <GridItem>
          <Button w='100%' h='45' value='25' bgColor='neutral.very-dark-cyan'>25%</Button>
        </GridItem>
        <GridItem>
          <Button w='100%' h='45' value='59' bgColor='neutral.very-dark-cyan'>50%</Button>
        </GridItem>
        <GridItem>
          <Input h='45px' placeholder='Custom' bgColor='neutral.very-light-grayish-cyan' _placeholder={{ color: 'neutral.dark-grayish-cyan' }} />
        </GridItem>
      </Grid>
      <InputPeople />
    </Box>
  )
}

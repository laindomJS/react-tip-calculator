import { chakra, Image } from '@chakra-ui/react'
import logo from './assets/logo.svg'
import { CalculatorContainer } from './components/CalculatorContainer'

function App () {
  return (
    <chakra.main
      w='100%'
      minH='100vh'
      bgColor='neutral.light-grayish-cyan'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent={{ md: 'center' }}
      py={{ base: '3rem', md: '0' }}
      px={{ base: '1rem', md: '0' }}
    >
      <Image src={logo} alt='logo' />
      <CalculatorContainer />
    </chakra.main>
  )
}

export default App

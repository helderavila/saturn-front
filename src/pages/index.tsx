import { useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
  console.log(walletAddress)

  if ((walletAddress && walletAddress.length <= 0) || !walletAddress) {
    return (
      <Box
        w="100%"
        h="100vh"
        bg="gray.700"
        display="flex"
        alignItems="center"
        justifyContent="center"
        as="main"
      >
        <Button colorScheme="pink" size="lg" onClick={() => { }}>
          Connect your wallet
        </Button>
      </Box>
    )
  }


  return (
    <Box
      w="100%"
      h="100vh"
      bg="gray.700"
      display="flex"
      alignItems="center"
      justifyContent="center"
      as="main"
    >
      <Box
        bg="gray.600"
        h="500px"
        width="30%"
        borderRadius="8px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Carteira conectada</Text>
      </Box>
    </Box>
  )
}

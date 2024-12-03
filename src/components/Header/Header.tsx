import { Box } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box 
      as="header"
      bg="blue.500" 
      color="white" 
      textAlign="center" 
      p={4} 
      fontSize="lg" 
      fontWeight="bold"
    >
      Dio Bank
    </Box>
  );
};


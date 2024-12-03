import { Box, Center, Input } from '@chakra-ui/react';
import { CustomButton } from './CustomButton';
import { login } from '../services/login';

interface ICard {
  id: number;
}

export const Card = ({ id }: ICard) => {
  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" marginBottom="10px" />
        <Input placeholder="password" marginBottom="10px" />
        <Center>
          <CustomButton onClick={login} colorScheme="teal" size="sm">
            Entrar
          </CustomButton>
        </Center>
      </Box>
    </Box>
  );
};

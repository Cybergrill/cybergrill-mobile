import { Center, Divider, HStack, Heading, Stack, Text } from 'native-base';
import React from 'react';
import Burger from '../../assets/burger.svg';
import { TouchableOpacity } from 'react-native';

interface CardMenuProps {
  onPress: () => void;
  name: string;
  price: number;
}

const CardMenu: React.FC<CardMenuProps> = ({ name, price, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack
        rounded="lg"
        borderColor="coolGray.200"
        borderWidth="3"
        p="5"
        mt={2}
        bg={'white'}
      >
        <Center>
          <Burger width={80} height={80} />
        </Center>
        <Divider mx={10} bg={'coolGray.200'} orientation="vertical" />
        <Stack
          p="2"
          flex={1}
          justifyContent={'center'}
          alignItems={'center'}
          space={3}
        >
          <Stack space={2}>
            <Heading size="lg" color={'coolGray.600'}>
              {name}
            </Heading>
            <Text textAlign={'center'} fontWeight="400" color={'coolGray.600'}>
              150g
            </Text>
          </Stack>
          <Text fontSize="md" color={'primary.500'} fontWeight="600">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
        </Stack>
      </HStack>
    </TouchableOpacity>
  );
};

export default CardMenu;

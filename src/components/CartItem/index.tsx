import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Heading, IconButton, Stack, Text } from 'native-base';
import Burger from '../../assets/burger.svg';

interface CartItemProps {
  name: string;
  price: number;
  onPress?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, onPress }) => {
  return (
    <>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        m={4}
        p={4}
        bg={'white'}
        rounded={'md'}
        position={'relative'}
      >
        <Stack direction={'row'} alignItems={'center'}>
          <Burger width={50} height={50} />
          <Stack ml={6}>
            <Heading color={'coolGray.500'} size="md">
              {name}
            </Heading>
            <Text color={'coolGray.900'}>
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </Stack>
        </Stack>
        <Stack alignItems={'center'}>
          <Text bold color={'coolGray.500'}>
            1x
          </Text>
        </Stack>
      </Stack>
      <IconButton
        size={8}
        variant="solid"
        rounded={'full'}
        _icon={{
          as: Feather,
          name: 'x',
        }}
        position={'absolute'}
        top={2}
        right={2}
        onPress={onPress}
      />
    </>
  );
};

export default CartItem;

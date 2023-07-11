import {
  Box,
  Button,
  CheckIcon,
  Divider,
  FlatList,
  HStack,
  Heading,
  Slide,
  Stack,
  Text,
  useDisclose,
} from 'native-base';
import React, { useCallback } from 'react';
import CartItem from '../../components/CartItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCheckout } from '../../contexts/Checkout';

type CartProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const Cart: React.FC<CartProps> = ({ navigation }) => {
  const { isOpen, onToggle } = useDisclose();
  const { order, setOrder } = useCheckout();

  const removeOrderItem = useCallback(
    (indexSelected: number) => {
      const newOrder = order.filter((item, index) => index !== indexSelected);
      setOrder(newOrder);
    },
    [order, setOrder]
  );

  const renderFooter = () => {
    return (
      <Stack mx={4}>
        <Divider my={4} color={'coolGray.200'} />
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          my={2}
        >
          <Text bold fontSize={'md'} color={'coolGray.500'}>
            Total:
          </Text>
          <Heading color={'black'}>
            {order
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue.price,
                0
              )
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </Heading>
        </Stack>
        <Button
          onPress={() => {
            onToggle();
            setTimeout(() => {
              navigation.goBack();
            }, 2000);
          }}
        >
          Fazer pedido
        </Button>
      </Stack>
    );
  };

  const renderHeader = () => {
    return (
      <Slide in={isOpen} placement="top">
        <Box
          w="100%"
          position="absolute"
          p="2"
          borderRadius="xs"
          bg="emerald.100"
          alignItems="center"
          justifyContent="center"
          _dark={{
            bg: 'emerald.200',
          }}
          safeArea
        >
          <HStack space={2}>
            <CheckIcon
              size="4"
              color="emerald.600"
              mt="1"
              _dark={{
                color: 'emerald.700',
              }}
            />
            <Text
              color="emerald.600"
              textAlign="center"
              _dark={{
                color: 'emerald.700',
              }}
              fontWeight="medium"
            >
              Pedido feito com sucesso!
            </Text>
          </HStack>
        </Box>
      </Slide>
    );
  };
  return (
    <FlatList
      data={order}
      ListHeaderComponent={renderHeader}
      renderItem={({ item, index }) => (
        <CartItem
          key={index}
          onPress={() => removeOrderItem(index)}
          name={item.name}
          price={item.price}
          isLast={index === order.length - 1}
        />
      )}
      ListFooterComponent={renderFooter}
    />
  );
};

export default Cart;

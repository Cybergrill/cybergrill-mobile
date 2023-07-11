import { FontAwesome } from '@expo/vector-icons';
import { Actionsheet, Box, Button, HStack, Icon, Text } from 'native-base';
import React, { useCallback, useState } from 'react';
import { useCheckout } from '../../contexts/Checkout';

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: {
    id: number;
    name: string;
    price: number;
  };
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  isOpen,
  onClose,
  item,
}) => {
  const { setOrder } = useCheckout();
  const [count, setCount] = useState(1);

  const handleAddToCart = useCallback(() => setCount(count + 1), [count]);
  const handleRemoveToCart = useCallback(() => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }, [count]);

  const addOrderItem = useCallback(() => {
    for (let index = 0; index < count; index++) {
      if (!item) {
        return;
      }
      setOrder((prevState) => [...prevState, item]);
    }
  }, [count, item, setOrder]);

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content p={4}>
        <HStack mb={4} w={'100%'} justifyContent={'space-between'}>
          <Text
            fontSize="24"
            color="gray.500"
            _dark={{
              color: 'gray.300',
            }}
          >
            X-Tudo:
          </Text>
          <Box>
            <Button.Group
              isAttached
              colorScheme="primary"
              mx={{
                base: 'auto',
                md: 0,
              }}
              size="sm"
            >
              <Button variant="outline" onPress={handleRemoveToCart}>
                -
              </Button>
              <Button disabled>{count}</Button>
              <Button variant="outline" onPress={handleAddToCart}>
                +
              </Button>
            </Button.Group>
          </Box>
        </HStack>
        <Button
          width={'100%'}
          size={'lg'}
          startIcon={
            <Icon
              as={FontAwesome}
              name="shopping-cart"
              size="md"
              color={'white'}
            />
          }
          colorScheme="primary"
          _text={{ color: 'white' }}
          onPress={() => {
            addOrderItem();
            setCount(1);
            onClose();
          }}
        >
          Adicionar ao carrinho
        </Button>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default AddToCartModal;

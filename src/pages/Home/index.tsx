import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Box,
  Button,
  FlatList,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  useDisclose,
} from 'native-base';
import React, { useState } from 'react';
import AddToCartModal from '../../components/AddToCartModal';
import CardMenu from '../../components/CardMenu';
import { useCheckout } from '../../contexts/Checkout';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface CategoryProps {
  name: string;
  icon: string;
}
const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { order } = useCheckout();

  const [itemSelected, setItemSelected] = useState<Order>();

  const categories: CategoryProps[] = [
    {
      name: 'Burger',
      icon: 'hamburger',
    },
    {
      name: 'Drinks',
      icon: 'bottle-soda',
    },
    {
      name: 'Adicionais',
      icon: 'french-fries',
    },
  ];

  const menu = [
    {
      id: 1,
      name: 'X-Bacon',
      price: 19.9,
    },
    {
      id: 2,
      name: 'X-Frango',
      price: 19.9,
    },
    {
      id: 3,
      name: 'X-Salada',
      price: 19.9,
    },
    {
      id: 4,
      name: 'X-Bacon',
      price: 19.9,
    },
    {
      id: 5,
      name: 'X-Calabresa',
      price: 19.9,
    },
    {
      id: 6,
      name: 'X-Tudo',
      price: 19.9,
    },
  ];

  return (
    <Box p="16px" safeArea>
      <HStack mb={10} space={3}>
        <Input
          w={'85%'}
          placeholder="Procure pelo seu lanche..."
          InputLeftElement={
            <Icon
              as={<FontAwesome name="search" size={14} color="black" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
        />
        <Box position={'relative'}>
          <IconButton
            flex={1}
            variant="outline"
            _icon={{
              as: Feather,
              name: 'shopping-cart',
            }}
            onPress={() => navigation.navigate('Cart')}
          />
          {order.length > 0 && (
            <Box
              position={'absolute'}
              background={'primary.600'}
              top={-10}
              right={-10}
              p={1}
              rounded={'full'}
            >
              <Text fontSize={'xs'} color={'amber.500'}>
                {order.length}
              </Text>
            </Box>
          )}
        </Box>
      </HStack>
      <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
        {categories.map((category) => (
          <Button
            variant="subtle"
            _text={{ color: 'white' }}
            leftIcon={
              <Icon
                as={MaterialCommunityIcons}
                name={category.icon}
                size="md"
                color={'white'}
              />
            }
          >
            {category.name}
          </Button>
        ))}
      </Stack>

      <FlatList
        data={menu}
        contentContainerStyle={{ paddingBottom: 150, paddingTop: 10 }}
        renderItem={({ item }) => (
          <CardMenu
            key={item.id}
            name={item.name}
            price={item.price}
            onPress={() => {
              setItemSelected(item);
              onOpen();
            }}
          />
        )}
      />
      <AddToCartModal isOpen={isOpen} onClose={onClose} item={itemSelected} />
    </Box>
  );
};

export default Home;

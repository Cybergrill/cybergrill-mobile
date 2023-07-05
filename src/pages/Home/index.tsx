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
  useDisclose,
} from 'native-base';
import React from 'react';
import AddToCartModal from '../../components/AddToCartModal';
import CardMenu from '../../components/CardMenu';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface CategoryProps {
  name: string;
  icon: string;
}
const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
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

  return (
    <Box px="16px" safeArea>
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
        <IconButton
          flex={1}
          variant="outline"
          _icon={{
            as: Feather,
            name: 'shopping-cart',
          }}
          onPress={() => navigation.navigate('Cart')}
        />
      </HStack>
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <Button
            variant="subtle"
            _text={{ color: 'white' }}
            leftIcon={
              <Icon
                as={MaterialCommunityIcons}
                name={item.icon}
                size="md"
                color={'white'}
              />
            }
          >
            {item.name}
          </Button>
        )}
      />
      <FlatList
        py={3}
        data={categories}
        renderItem={() => <CardMenu onPress={onOpen} />}
      />
      <AddToCartModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Home;

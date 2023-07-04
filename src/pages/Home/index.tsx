import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Actionsheet,
  Box,
  Button,
  FlatList,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  useDisclose,
} from 'native-base';
import React, { useState } from 'react';
import CardMenu from '../../components/CardMenu';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface CategoryProps {
  name: string;
  icon: string;
}
const Home: React.FC<HomeProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [count, setCount] = useState(1);
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
          variant="ghost"
          _icon={{
            as: Feather,
            name: 'shopping-cart',
          }}
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
                <Button
                  variant="outline"
                  onPress={() => {
                    if (count === 1) {
                      setCount(1);
                    } else {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </Button>
                <Button disabled>{count}</Button>
                <Button variant="outline" onPress={() => setCount(count + 1)}>
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
            onPress={onClose}
          >
            Adicionar ao carrinho
          </Button>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default Home;

import { Center, Stack } from 'native-base';
import React from 'react';
import Burger from '../../assets/burger.svg';

const Detail: React.FC = () => {
  return (
    <Stack p="5" mt={2}>
      <Center>
        <Burger width={200} height={200} />
      </Center>
    </Stack>
  );
};

export default Detail;

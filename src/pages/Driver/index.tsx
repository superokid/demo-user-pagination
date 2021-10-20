import { VStack } from '@chakra-ui/react';
import DriverHeader from './Header';
import DriverLists from './Lists';

interface Props {}

const Driver = (props: Props) => {
  return (
    <VStack w="100%">
      <DriverHeader />
      <DriverLists />
    </VStack>
  );
};

export default Driver;

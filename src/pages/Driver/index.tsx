import { useState } from 'react';
import { VStack, Text, Skeleton } from '@chakra-ui/react';

import DriverHeader from './Header';
import DriverLists from './Lists';
import { useDrivers } from 'config/api';

interface Props {}

const Driver = (props: Props) => {
  const [search, setSearch] = useState('');
  const { isLoading, isError, data } = useDrivers();

  if (isError) {
    return <Text>Error</Text>;
  }

  const searchedData = (data || []).filter(
    (item) => item.name.first.toLowerCase().indexOf(search.toLowerCase()) > -1
  );

  return (
    <VStack w="100%">
      <DriverHeader
        handleSearch={(val) => {
          setSearch(val);
        }}
      />
      <Skeleton isLoaded={!isLoading} w="100%" height="20px">
        <DriverLists drivers={searchedData} />
      </Skeleton>
    </VStack>
  );
};

export default Driver;

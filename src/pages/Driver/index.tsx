import { useQuery } from 'react-query';
import { VStack, Text, Skeleton } from '@chakra-ui/react';

import DriverHeader from './Header';
import DriverLists from './Lists';
import { UserApi } from 'types/User';

interface Props {}

const Driver = (props: Props) => {
  const { isLoading, error, data } = useQuery<UserApi>(
    'repoData',
    () => fetch('https://randomuser.me/api/?results=30').then((res) => res.json()),
    {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: 15000,
    }
  );

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <VStack w="100%">
      <DriverHeader />
      <Skeleton isLoaded={!isLoading} w="100%" height="20px">
        <DriverLists drivers={data?.results || []} />
      </Skeleton>
    </VStack>
  );
};

export default Driver;

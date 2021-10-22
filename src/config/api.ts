import { useQuery } from 'react-query';
import { UserApi } from 'types/User';

export const useDrivers = () =>
  useQuery(
    'getDrivers',
    async () => {
      const res: UserApi = await fetch('https://randomuser.me/api/?results=30').then((res) =>
        res.json()
      );
      return res.results;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: Infinity,
    }
  );

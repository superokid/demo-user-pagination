import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Stack, Button, Box, Text } from '@chakra-ui/react';

import User from 'types/User';
import DriverCard from './Card';

interface Props {
  drivers?: User[];
  search?: string;
}

export const PAGE_LIMIT = 5;
export const PAGE_TOTAL = 30;

const Lists = ({ drivers, search = '' }: Props) => {
  const [page, setPage] = useState<number>(1);

  const handlePage = (curr: number) => () => {
    setPage(curr);
  };

  const searchedDrivers = (drivers || []).filter(
    (item) => item.name.first.toLowerCase().indexOf(search.toLowerCase()) > -1
  );
  const totalPage = Math.ceil(searchedDrivers.length / PAGE_LIMIT);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <Stack spacing="2em">
      {!searchedDrivers?.length && (
        <Text align="center" color="gray">
          Driver tidak ditemukan...
        </Text>
      )}
      <Container data-testid="lists-container">
        {(searchedDrivers || [])
          .slice(page * PAGE_LIMIT - PAGE_LIMIT, page * PAGE_LIMIT)
          .map((item, key) => (
            <DriverCard data={item} key={key} />
          ))}
      </Container>
      <Stack direction="row" justify="center" spacing="1em">
        <Button variant="link" onClick={handlePage(page - 1)} color="black" isDisabled={page === 1}>
          {`< Previous Page`}
        </Button>
        <Button
          variant="link"
          onClick={handlePage(page + 1)}
          color="black"
          isDisabled={page === totalPage}
        >
          {`Next Page >`}
        </Button>
      </Stack>
      <Box />
    </Stack>
  );
};

export default Lists;

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1366px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

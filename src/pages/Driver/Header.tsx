import {
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import IconSearch from 'assets/icons/search.svg';

interface Props {
  handleSearch: (search: string) => void;
}

const Header = ({ handleSearch }: Props) => {
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <Box bg="white" w="100%" p={4} d={{ lg: 'flex' }} mb={6}>
      <Box>
        <Heading size="xl" color="primary">
          DRIVER MANAGEMENT
        </Heading>
        <Text>Data driver yang bekerja dengan Anda</Text>
      </Box>
      <Spacer />
      <Box my={{ base: 3, lg: 0 }} mr={{ lg: 3 }}>
        <InputGroup>
          <InputLeftElement
            children={<img src={IconSearch} width="20" height="20" alt="icon search" />}
          />
          <Input placeholder="Cari Driver" onChange={handleInput} />
        </InputGroup>
      </Box>
      <Button w={{ base: '100%', lg: 'auto' }} background="primary" color="white" fontSize="0.8em">
        TAMBAH DRIVER +
      </Button>
    </Box>
  );
};

export default Header;

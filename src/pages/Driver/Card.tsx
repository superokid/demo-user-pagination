import { Box, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import format from 'date-fns/format';

import ImgMore from 'assets/icons/more.png';
import ImgUser from 'assets/icons/user.svg';
import User from 'types/User';

interface Props {
  data?: User;
}

const Card: React.FC<Props> = ({ data = {} }) => {
  return (
    <Container bg="white" className="driver-card">
      <Flex p={3}>
        <Text color="#afafaf" fontWeight="bold" mr={1}>
          Driver ID
        </Text>
        <Text color="primary">281939RY</Text>
        <Spacer />
        <img src={ImgMore} alt="more" />
      </Flex>
      <hr />
      <Stack
        direction={{ base: 'row', md: 'column' }}
        align={{
          base: 'center',
          md: 'flex-start',
        }}
        p={4}
      >
        <img src={ImgUser} alt="driver" className="driver-card__avatar" />
        <Stack>
          <Box>
            <Title>Nama Driver</Title>
            <Text>
              {data.name?.first}, {data.name?.last}
            </Text>
          </Box>
          <Box>
            <Title>Telepon</Title>
            <Text>{data.phone}</Text>
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Title>Email</Title>
            <Text>{data.email}</Text>
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Title>Tanggal Lahir</Title>
            <Text>{data.dob?.date && format(new Date(data.dob?.date), 'dd-MM-yyyy')}</Text>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Card;

const Container = styled(Box)`
  font-size: 0.8em;
  .driver-card__avatar {
    margin-right: 2em;
    width: 50px;
    height: 50px;
    max-width: 40%;
  }
  @media (max-width: 767px) {
    .driver-card__avatar {
      width: 100px;
      height: 100px;
      margin-bottom: 5px;
    }
  }
`;

const Title = styled(Text)`
  color: gray;
`;

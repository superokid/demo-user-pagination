import { Box, Flex, Spacer, Text, Image, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import MobSideBar from './MobSideBar';
import IconUser from 'assets/icons/user.svg';
import ImgLogo from 'assets/logo-shipper.png';

interface Props {}

const Header: React.FC<Props> = () => {
  const [isMobile] = useMediaQuery('(max-width:767px)');
  return (
    <Box bg="white" px={5} py={7} position="sticky" top="0" zIndex={2}>
      <Flex>
        {isMobile && <MobSideBar />}
        <Link to="/">
          <Image width="150px" objectFit="contain" src={ImgLogo} alt="shipper logo" />
        </Link>
        <Spacer />
        <Box>
          <Flex alignItems="center">
            {!isMobile && (
              <>
                <span>Hello,</span>&nbsp;
                <Text color="primary" mr={3}>
                  Shipper User
                </Text>
              </>
            )}
            <img width="32" height="32" src={IconUser} alt="user" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

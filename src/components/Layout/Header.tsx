import { Box, Flex, Spacer, Text, Image, useMediaQuery } from '@chakra-ui/react';

import MobSideBar from './MobSideBar';
import IconUser from 'assets/icons/user.svg';
import ImgLogo from 'assets/logo-shipper.png';

interface Props {}

const Header: React.FC<Props> = () => {
  const [isMobile] = useMediaQuery('(max-width:767px)');
  return (
    <Box bg="white" px={5} py={7}>
      <Flex>
        {isMobile && <MobSideBar />}
        <Image width="150px" objectFit="contain" src={ImgLogo} alt="shipper logo" />
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

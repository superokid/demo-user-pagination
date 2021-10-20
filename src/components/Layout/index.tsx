import React from 'react';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import Header from './Header';
import SideBar from './SideBar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const [isDesktop] = useMediaQuery('(min-width:768px)');
  return (
    <Box height="100%">
      <Header />
      <Flex height={{ base: '150vh', lg: '100%' }} maxHeight={{ xl: 'calc(100vh - 88px)' }}>
        {isDesktop && (
          <Flex w="20%">
            <SideBar />
          </Flex>
        )}
        <Flex w={{ base: '100%', md: '80%' }} bg="lightGray" p={6}>
          {children}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Layout;

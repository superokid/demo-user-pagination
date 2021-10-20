import React from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import Header from './Header';
import SideBar from './SideBar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const [isDesktop] = useMediaQuery('(min-width:768px)');
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex grow={1}>
        {isDesktop && (
          <Flex w="20%">
            <SideBar />
          </Flex>
        )}
        <Flex w={{ base: '100%', md: '80%' }} bg="lightGray" p={6}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;

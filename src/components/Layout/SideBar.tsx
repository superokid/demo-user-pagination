import { NavLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { menuRoutes } from 'config/routes';

interface Props {
  onClick?: () => void;
}

const SideBar = ({ onClick }: Props) => {
  return (
    <div>
      {menuRoutes.map((item) => (
        <SideBarItem
          to={item.path}
          key={item.name}
          activeClassName="active"
          onClick={onClick}
          exact
        >
          <Flex pl={5} pr={2} py={3} align="center">
            <Flex w="20px" mr={3}>
              {item.icon}
            </Flex>
            <Text>{item.name}</Text>
          </Flex>
        </SideBarItem>
      ))}
    </div>
  );
};

export default SideBar;

const SideBarItem = styled(NavLink)`
  display: flex;

  &.active {
    position: relative;
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active::before {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.colors.primary};
    width: 4px;
    height: 100%;
  }

  svg g {
    fill: black;
  }

  &.active svg,
  &.active svg g {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

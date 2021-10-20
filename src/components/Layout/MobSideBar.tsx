import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';

import SideBar from './SideBar';
import { ReactComponent as IconMenu } from 'assets/icons/menu.svg';

interface Props {}

const MobSideBar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="menu"
        variant="link"
        icon={<IconMenu style={{ height: '32px' }} />}
        onClick={onOpen}
        mr={1}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menubar</DrawerHeader>

          <SideBar onClick={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobSideBar;

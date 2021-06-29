import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import NavBar from '../../components/navbar';

import { Container, NavContainer, ChildrenContainer } from './styled';

const Dashboard: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      {/* <Button colorScheme="pink" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody padding="0">
            <NavContainer>
              <NavBar />
            </NavContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default Dashboard;

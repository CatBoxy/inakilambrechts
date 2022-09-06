import React from 'react';
import { useRouter } from 'next/router';
import { ListWrapper, NavContainer, NavWrapper } from '../styles/HeaderStyles';
import { IconMenu } from '@tabler/icons';
import Navbar from './navbar';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';


export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const location = router.pathname;
  const formattedLocation = location.substring(1).toUpperCase();

  return (
    <>
      <NavContainer>
        <nav>
          <NavWrapper className='smDisplay'>
            <h2>[{formattedLocation}]</h2>
          </NavWrapper>
          <NavWrapper justify='title' className='smDisplay'>
            <h2 className='name'>IÑAKI LAMBRECHTS</h2>
          </NavWrapper>
          <NavWrapper className='mdDisplay' width='65%'>
            <h2 className='name'>IÑAKI LAMBRECHTS</h2>
          </NavWrapper>
          <NavWrapper justify='icon' className='smDisplay'>
            <IconMenu onClick={onOpen} />
            <Drawer
              placement={'top'}
              onClose={onClose}
              isOpen={isOpen}
              size={'full'}
            >
              <DrawerOverlay />
              <DrawerContent style={{ color: 'white', height: '100%', backgroundColor: 'black' }}>
                <DrawerCloseButton style={{ color: 'white', border: '0', backgroundColor: 'transparent', position: 'absolute', top: '38px', right: '46px', width: '28px' }} />
                <DrawerBody>
                  <ListWrapper >
                    <ul >
                      <li onClick={onClose}>
                        <Link href={'/film'}>{location === '/film' ? '[FILM]' : 'FILM'}</Link>
                      </li>
                      <li onClick={onClose}>
                        <Link href={'/photo'}>{location === '/photo' ? '[PHOTO]' : 'PHOTO'}</Link>
                      </li>
                      <li onClick={onClose}>
                        <Link href={'/contact'}>{location === '/contact' ? '[GET IN TOUCH]' : 'GET IN TOUCH'}</Link>
                      </li>
                      <li onClick={onClose}>
                        <Link href={'/about'}>{location === '/about' ? '[ABOUT]' : 'ABOUT'}</Link>
                      </li>
                    </ul>
                  </ListWrapper>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </NavWrapper>
          <NavWrapper justify='icon' className='mdDisplay'>
            <Navbar location={location} />
          </NavWrapper>
        </nav>
      </NavContainer>
    </>
  );
};

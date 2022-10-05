import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ListContainer } from '../styles/NavStyles';

const Navbar = (location) => {
  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    if (location) {
      setCurrentPath(location);
    }
  }, [location]);

  return (
    <ListContainer>
      <ul>
        <li>
          <Link href={'/film'}>{currentPath?.location === '/film' ? '[FILM]' : 'FILM'}</Link>
        </li>
        <li>
          <Link href={'/photo'}>{currentPath?.location === '/photo' ? '[PHOTO]' : 'PHOTO'}</Link>
        </li>
        <li>
          <Link href={'/contact'}>{currentPath?.location === '/contact' ? '[GET IN TOUCH]' : 'GET IN TOUCH'}</Link>
        </li>
        <li>
          <Link href={'/about'}>{currentPath?.location === '/about' ? '[ABOUT]' : 'ABOUT'}</Link>
        </li>
      </ul>
    </ListContainer>
  );
};

export default Navbar;
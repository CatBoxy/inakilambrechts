import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ListContainer } from '../styles/NavStyles';
import { NavItem } from '../styles/NavStyles';

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
          <Link href={'/film'}>
            <p className={location.location === '/film' ? 'active' : ''}>
              FILM
            </p>
          </Link>
        </li>
        <li>
          <Link href={'/photo'}>
            <p className={location.location === '/photo' ? 'active' : ''}>
              PHOTO
            </p>
          </Link>
        </li>
        <li>
          <Link href={'/contact'}>
            <p className={location.location === '/contact' ? 'active' : ''}>
              GET IN TOUCH
            </p>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <p className={location.location === '/about' ? 'active' : ''}>
              ABOUT
            </p>
          </Link>
        </li>
      </ul>
    </ListContainer>
  );
};

export default Navbar;
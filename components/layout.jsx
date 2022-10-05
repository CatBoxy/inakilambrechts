import React from 'react';
import { ReactNode } from 'react';
import { MainWrapper } from '../styles/LayoutStyles';


const Layout = ({ height, children, padding, sticky }) => (
  <MainWrapper height={height} padding={padding} sticky={sticky}>
    {children}
  </MainWrapper>
);

export default Layout;
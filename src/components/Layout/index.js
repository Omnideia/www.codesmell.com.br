import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import Header from '../Header';

import GlobalStyles from '../../styles/global';

import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
      <S.LayoutMain>
        <S.LayoutContent>
          {children}
        </S.LayoutContent>
        </S.LayoutMain>
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

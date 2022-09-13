import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import Logo from '../Logo';
import EmailLink from '../EmailLink';

import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
      <Logo />

      <MenuLinks />
      </S.HeaderContent>



        {/* <EmailLink /> */}
    </S.HeaderContainer>
  );
};

export default Header;

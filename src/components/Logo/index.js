import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import EmailLink from '../EmailLink';

import * as S from './styled';

const Logo = () => {
  return (
    <S.LogoContainer>
      <S.Link
        to="/"
        cover
        direction="top"
        bg="#383A47"
        duration={0.7}
        activeClassName="active"
        title="Voltar para Home"
      >
        Code Smell
      </S.Link>
    </S.LogoContainer>
  );
};

export default Logo;

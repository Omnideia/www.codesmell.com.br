import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  /* width: 100%; */

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.6rem;
  font-weight: 300;
  /* width: 100%; */

  display: flex ;
`;

export const MenuLinksItem = styled.li`
  display: flex;
  /* width: 100%; */

  .active {
    color: var(--color-link-hover);
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--color-link-primary);
  letter-spacing: 3px;
  text-decoration: none;
  transition: color 0.5s;
  width: 100%;
  padding: 1.6rem 0;

  font-size: 1.4rem;

  /* & + & { */
    margin-left: 2.8rem;
  /* } */

  &:hover {
    color: var(--color-link-hover);
  }
`;

import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.nav`
  display: none;

  ${media.lessThan('large')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-image: linear-gradient(to top, #383A47, #383A47, #383A47, #383A47, #3D3F4F);
    margin: 0;
    padding: 1.2rem 2.8rem;
    bottom: 0;
    z-index: 999;
  `}
`;

export const MenuBarList = styled.ul`
  ${media.lessThan('large')`
    display: flex;
    margin: 0 auto;
    margin-left: -0.9rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0;
  `}
`;

export const MenuBarItem = styled.li`
  ${media.lessThan('large')`
    width: 2rem;
    height: 2rem;

    .active {
      color: var(--color-link-hover);
    }
  `}
`;

export const MenuBarLink = styled(AniLink)`
  ${media.lessThan('large')`
    padding: 1rem;  
    color: var(--color-link-primary);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--color-link-hover);
      
    }
  `}
`;

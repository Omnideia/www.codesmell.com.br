import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import media from 'styled-media-query';

export const LogoContainer = styled.p`
  font-size: 2rem;
  font-family: var(--font-title-main);

  color: var(--color-link-primary);
`;

export const Link = styled(AniLink)`
  color: var(--color-link-primary);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--color-link-hover);
  }
`;
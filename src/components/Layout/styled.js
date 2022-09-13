import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
    padding-bottom: 2.4rem;
  `}
`;

export const LayoutMain = styled.main`
  background: var(--background-layout-main);
  transition: background-color, color 0.5s;
  min-height: 100vh;
  font-size: 1.6rem;
  padding-top: 0.5rem;
  width: 100%;
  
  ${media.lessThan('large')`
    padding: 7rem 0 3.2rem;
  `}
`;

export const LayoutContent = styled.div`
  width: 100%;
  max-width: 130rem;

  margin: 0 auto;
  padding-top: 6rem; // header height
`;

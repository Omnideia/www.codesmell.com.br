import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
 
  background-color: var(--background-profile-primary);
 
  height: 6rem;
  width: 100%;
  
  position: fixed;
  top: 0;

  text-align: center;

  /* box-shadow: 0 10px 10px #313240; */

  ${media.lessThan('large')`
    margin: 0;
    border-radius: 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%
    height: auto;
    padding: 1.8rem 2.4rem;
    background-color: var(--background-layout-mobile);
    box-shadow: 0 0 20px #242630d2;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    z-index: 999;
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;
  max-width: 130rem;

  margin: 0 auto;

  /* background-color: #ddd; */
`;